// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract RealEstate {
    //state variable
    struct Property {
        uint productId;
        address owner;
        uint price;
        string propertyTitle;
        string category;
        string images;
        string propertyAddress;
        string description;
        address[] reviewers;
        string[] reviews;
    }

    address payable contractOwner = payable(0xA895e65D0bC78dDcb6de4a2F67895Bf54923dF51);
    uint public listingPrice = 0.025 ether;

    //mapping
    mapping(uint => Property) private properties;
    uint public propertyIndex;

    //events
    event PropertyListed(uint indexed id, address indexed owner, uint price);
    event PropertySold(
        uint indexed id,
        address indexed oldOwner,
        address indexed newOwner,
        uint price
    );
    event PropertyResold(
        uint indexed id,
        address indexed oldOwner,
        address indexed newOwner,
        uint price
    );

    // review section
    struct Review {
        address reviewer;
        uint productId;
        uint rating;
        string comment;
        uint likes;
        uint reviewIndex;
    }
    struct Product {
        uint productId;
        uint totalRating;
        uint numReviews;
    }

    //mapping
    mapping(uint => Review[]) private reviews;
    mapping(address => uint[]) private userReviews;
    mapping(uint => Product) private products;

    uint public reviewsCounter;

    event ReviewAdded(
        uint indexed productId,
        address indexed reviewer,
        uint rating,
        string comment
    );

    event ReviewLiked(
        uint indexed productId,
        uint indexed reviewIndex,
        address indexed liker,
        uint likes
    );

    modifier onlyOwner {
        require(msg.sender == contractOwner, "Not owner");
        _;
    }

    //function in contract
    function listProperty(
        address owner,
        uint price,
        string memory _propertyTitle,
        string memory _categpry,
        string memory _images,
        string memory _propertieyAddress,
        string memory _description
    ) external returns (uint256) {
        require(price > 0, "Price must be greater than 0.");
        // properties.index(productId) start with 0
        uint productId = propertyIndex++;
        Property storage property = properties[productId];

        property.productId = productId;
        property.owner = owner;
        property.price = price;
        property.propertyTitle = _propertyTitle;
        property.category = _categpry;
        property.propertyAddress = _propertieyAddress;
        property.images = _images;
        property.description = _description;

        emit PropertyListed(productId, owner, price);

        return productId;
    }

    function updateProperty(
        address owner,
        uint productId,
        string memory _propertyTitle,
        string memory _categpry,
        string memory _images,
        string memory _propertieyAddress,
        string memory _description
    ) external returns (uint256) {
        Property storage property = properties[productId];

        require(property.owner == owner, "You are not the owner");

        property.propertyTitle = _propertyTitle;
        property.category = _categpry;
        property.propertyAddress = _propertieyAddress;
        property.images = _images;
        property.description = _description;

        return productId;
    }

    function updatePrice(
        address owner,
        uint productId,
        uint price
    ) external returns (string memory) {
        Property storage property = properties[productId];

        require(property.owner == owner, "You are not the owner");

        property.price = price;

        return "Your property is updated";
    }

    function buyProperty(uint id, address buyer) external payable {
        uint amount = msg.value;

        require(amount >= properties[id].price, "Insufficient funds");

        Property storage property = properties[id];

        (bool ok, ) = payable(property.owner).call{value: amount}("");

        if (ok) {
            property.owner = buyer;
            emit PropertySold(id, property.owner, buyer, amount);
        }
    }

    function getAllProperties() public view returns (Property[] memory) {
        uint itemConut = propertyIndex;
        uint currentIndex = 0;

        Property[] memory items = new Property[](itemConut);
        for (uint i = 0; i < itemConut; i++) {
            items[currentIndex++] = properties[i];
        }
        return items;
    }

    function getProperty(
        uint id
    )
        external
        view
        returns (
            uint,
            address,
            uint,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory,
            address[] memory,
            string[] memory
        )
    {
        Property memory property = properties[id];
        return (
            property.productId,
            property.owner,
            property.price,
            property.propertyTitle,
            property.category,
            property.images,
            property.propertyAddress,
            property.description,
            property.reviewers,
            property.reviews
        );
    }

    function getUserProperties(
        address user
    ) external view returns (Property[] memory) {
        uint totalItemCount = propertyIndex;
        uint itemCount = 0;

        //gas saving
        Property[] memory loadProperties = new Property[](totalItemCount);
        uint curIndex = 0;
        for (uint i = 0; i < totalItemCount; i++) {
            loadProperties[curIndex] = properties[i];
            if (loadProperties[curIndex].owner == user) {
                itemCount += 1;
            }
            curIndex += 1;
        }

        Property[] memory items = new Property[](itemCount);
        if (itemCount > 0) {
            uint currentIndex = 0;
            for (uint i = 0; i < totalItemCount; i++) {
                if (loadProperties[i].owner == user) {
                    items[currentIndex] = loadProperties[i];
                    currentIndex += 1;
                }
            }
        }

        return items;
    }

    //reviews function

    function addReview(
        uint productId,
        uint rating,
        string calldata comment,
        address user
    ) external {
        require(rating >= 1 && rating <= 5, "Rating must be between 1 and 5");

        Property storage property = properties[productId];

        property.reviewers.push(user);
        property.reviews.push(comment);

        //review section
        reviews[productId].push(Review(user, productId, rating, comment, 0, reviewsCounter));
        userReviews[user].push(productId);
        products[productId].totalRating += rating;
        products[productId].numReviews += 1;

        emit ReviewAdded(productId, user, rating, comment);

        reviewsCounter++;
    }

    function getProductReviews(
        uint productId
    ) external view returns (Review[] memory) {
        return reviews[productId];
    }

    function getUserReviews(
        address user
    ) external view returns (Review[] memory) {
        uint totalReviews = userReviews[user].length;
        uint currentIndex = 0;

        Review[] memory userProductReview = new Review[](totalReviews);
        for (uint i = 0; i < totalReviews; i++) {
            // loadProperties[i] = properties[i];
            uint productId = userReviews[user][i];

            //reviews[productId]
            Review[] memory productReviews = reviews[productId];
            for (uint j = 0; j < productReviews.length; j++) {
                if (productReviews[j].reviewer == user) {
                    userProductReview[currentIndex++] = productReviews[j];
                }
            }
        }

        return userProductReview;
    }

    function likeReview(
        uint productId,
        uint reviewIndex,
        address user
    ) external {
        Review storage review = reviews[productId][reviewIndex];
        review.likes++;

        emit ReviewLiked(productId, reviewIndex, user, review.likes);
    }

    function getHighestRatedProduct() external view returns (uint) {
        uint highestRating = 0;
        uint highestRatedProductId = 0;

        for (uint i = 1; i <= reviewsCounter; i++) {
            uint productId = i;
            if (products[productId].numReviews > 0) {
                uint avgRating = products[productId].totalRating /
                    products[productId].numReviews;
                if (avgRating > highestRating) {
                    highestRating = avgRating;
                    highestRatedProductId = productId;
                }
            }
        }
        return highestRatedProductId;
    }

    function getListingPrice() public view returns (uint){
        return listingPrice;
    }
    
    /* Updates the listing price of the contract */
    function updateListingPrice(uint256 _listingPrice, address owner)
        public
        payable
        onlyOwner
    {
        require(
            contractOwner == owner,
            "Only contract owner can update listing price."
        );
        listingPrice = _listingPrice;
    }

}