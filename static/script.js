const reviewsRow = document.getElementById("reviewsRow");
const reviewTitle = document.getElementById("reviewTitle");
const reviewText = document.getElementById("reviewText");
const reviewName = document.getElementById("reviewName");
const reviewForm = document.getElementById("reviewForm");
const reviewButton = document.getElementById("reviewButton");

reviewButton.addEventListener("click", function (event) {
    // Prevent page reload
    event.preventDefault();
    // Check if the form is valid
    if (!reviewForm.checkValidity()) {
        return;
    }
    // Append a new review to the reviewsRow
    let review = document.createElement("div");
    let author = reviewName.value === "" ? "Anonymous" : reviewName.value;
    review.classList.add("col-lg-4");
    review.classList.add("col-md-6");
    review.classList.add("py-3");
    review.innerHTML = `
        <div class="card h-100">
            <div class="card-body">
                <h4 class="card-title">${reviewTitle.value}</h4>
                <blockquote class="blockquote mb-0">
                    <p>${reviewText.value}</p>
                    <footer class="text-end blockquote-footer"><i>${author}</i></footer>
                </blockquote>
            </div>
        </div>
    `;
    reviewsRow.appendChild(review);
    // Clear the form
    reviewForm.reset();
});

// Update the copy right year
const copyRightYear = document.getElementById("copyRightYear");
copyRightYear.innerHTML = new Date().getFullYear().toString();
