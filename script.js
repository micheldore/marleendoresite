    document.getElementById("whiteColumn").addEventListener("click", animateColumns);
    document.getElementById("paperColumn").addEventListener("click", animateColumns);

    function animateColumns() {
      var whiteColumn = document.getElementById("whiteColumn");
      var paperColumn = document.getElementById("paperColumn");

      // Get the current width of the columns
      var whiteWidth = whiteColumn.getBoundingClientRect().width;
      var paperWidth = paperColumn.getBoundingClientRect().width;

      // Check which column is active based on their widths
      if (whiteWidth < paperWidth) {
        // If the white column is narrower, expand it and shrink the paper column
        whiteColumn.style.flex = "86.75%";
        paperColumn.style.flex = "13.25%";
      } else {
        // If the paper column is narrower, expand it and shrink the white column
        whiteColumn.style.flex = "13.25%";
        paperColumn.style.flex = "86.75%";
      }
    }