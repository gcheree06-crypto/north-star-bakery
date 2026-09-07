// North Star Bakery - Touchstone 4 JavaScript

const bakeryItems = [
    { name: "Classic Artisan Loaf", category: "Bread" },
    { name: "Seasonal Bread", category: "Bread" },
    { name: "Morning Pastry", category: "Pastry" },
    { name: "Pastry Box", category: "Pastry" },
    { name: "Celebration Cake", category: "Cake" }
];

const validationMessages = {
    nameRequired: "Please enter your name.",
    nameLength: "Your name must be at least 2 characters long.",
    emailRequired: "Please enter your email address.",
    emailInvalid: "Please enter a valid email address."
};


function getSavedFavorites() {
    const savedFavorites = localStorage.getItem("bakeryFavorites");

    if (savedFavorites) {
        return JSON.parse(savedFavorites);
    }

    return [];
}


function saveFavorites(favorites) {
    localStorage.setItem(
        "bakeryFavorites",
        JSON.stringify(favorites)
    );
}


function displayFavorites() {
    const favoritesDisplay = document.getElementById("favorites-display");

    if (!favoritesDisplay) {
        return;
    }

    const favorites = getSavedFavorites();

    if (favorites.length === 0) {
        favoritesDisplay.textContent =
            "You have not saved any bakery favorites yet.";
        return;
    }

    favoritesDisplay.innerHTML = "";

    const heading = document.createElement("h3");
    heading.textContent = "Your Saved Favorites";
    favoritesDisplay.appendChild(heading);

    const list = document.createElement("ul");

    favorites.forEach(function (favorite) {
        const listItem = document.createElement("li");
        listItem.textContent = favorite;
        list.appendChild(listItem);
    });

    favoritesDisplay.appendChild(list);
}


function addFavorite(itemName) {
    const favorites = getSavedFavorites();

    if (!favorites.includes(itemName)) {
        favorites.push(itemName);
        saveFavorites(favorites);
    }

    displayFavorites();
}


function clearFavorites() {
    localStorage.removeItem("bakeryFavorites");
    displayFavorites();
}


function setUpFavoriteButtons() {
    const buttons = document.querySelectorAll(".favorite-button");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            const itemName = button.dataset.item;
            addFavorite(itemName);
        });
    });

    const clearButton = document.getElementById("clear-favorites");

    if (clearButton) {
        clearButton.addEventListener("click", clearFavorites);
    }
}


function savePreferredRequestType() {
    const requestType = document.getElementById("request-type");

    if (!requestType) {
        return;
    }

    requestType.addEventListener("change", function () {
        localStorage.setItem(
            "preferredRequestType",
            requestType.value
        );
    });
}


function loadPreferredRequestType() {
    const requestType = document.getElementById("request-type");

    if (!requestType) {
        return;
    }

    const savedRequestType =
        localStorage.getItem("preferredRequestType");

    if (savedRequestType) {
        requestType.value = savedRequestType;
    }
}


function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);

    if (errorElement) {
        errorElement.textContent = message;
    }
}


function clearErrors() {
    showError("name-error", "");
    showError("email-error", "");
}


function validateContactForm(event) {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");

    if (!nameInput || !emailInput) {
        return;
    }

    clearErrors();

    let formIsValid = true;

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();

    if (nameValue === "") {
        showError(
            "name-error",
            validationMessages.nameRequired
        );
        formIsValid = false;
    } else if (nameValue.length < 2) {
        showError(
            "name-error",
            validationMessages.nameLength
        );
        formIsValid = false;
    }

    if (emailValue === "") {
        showError(
            "email-error",
            validationMessages.emailRequired
        );
        formIsValid = false;
    } else if (
        !emailValue.includes("@") ||
        !emailValue.includes(".")
    ) {
        showError(
            "email-error",
            validationMessages.emailInvalid
        );
        formIsValid = false;
    }

    if (!formIsValid) {
        event.preventDefault();
    }
}


function setUpFormValidation() {
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener(
            "submit",
            validateContactForm
        );
    }
}


function initializeWebsite() {
    displayFavorites();
    setUpFavoriteButtons();
    loadPreferredRequestType();
    savePreferredRequestType();
    setUpFormValidation();
}


document.addEventListener(
    "DOMContentLoaded",
    initializeWebsite
);
