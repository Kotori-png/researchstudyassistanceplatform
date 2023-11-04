function updateProgress() {
    const introCheckbox = document.getElementById("introduction");
    const conceptualCheckbox = document.getElementById("conceptual-frame");
    const problemStatementCheckbox = document.getElementById("problem-statement");
    const significanceCheckbox = document.getElementById("significance-prob");
    const scopeCheckbox = document.getElementById("scope-limit");
    const definitionCheckbox = document.getElementById("definition-terms");
    const reviewCheckbox = document.getElementById("rev-rela-liter");
    const synthesisCheckbox = document.getElementById("synthesis");
    const designCheckbox = document.getElementById("design");
    const participantsCheckbox = document.getElementById("participants");
    const instrumentCheckbox = document.getElementById("instrument");
    const procedureCheckbox = document.getElementById("procedure");
    const dataanalCheckbox = document.getElementById("data-anal");

    const introProgress = introCheckbox.checked ? 13 : 0;
    const conceptualProgress = conceptualCheckbox.checked ? 5 : 0;  
    const problemStatementProgress = problemStatementCheckbox.checked ? 7 : 0;
    const significanceProgress = significanceCheckbox.checked ? 5 : 0;
    const scopeProgress = scopeCheckbox.checked ? 8 : 0;
    const definitionProgress = definitionCheckbox.checked ? 7 : 0;
    const reviewProgress = reviewCheckbox.checked ? 15 : 0;
    const synthesisProgress = synthesisCheckbox.checked ? 5 : 0;
    const designProgress = designCheckbox.checked ? 6 : 0;
    const participantsProgress = participantsCheckbox.checked ? 3 : 0;
    const instrumentProgress = instrumentCheckbox.checked ? 13 : 0;
    const procedureProgress = procedureCheckbox.checked ? 6 : 0;
    const dataanalProgress = dataanalCheckbox.checked ? 5 : 0;

    const totalProgress = introProgress + conceptualProgress + problemStatementProgress + significanceProgress + scopeProgress + definitionProgress + reviewProgress + synthesisProgress + designProgress + participantsProgress + instrumentProgress + procedureProgress + dataanalProgress;
    const overallProgressPercentage = (totalProgress / 98) * 100; 

    document.getElementById("progress-introduction").value = introProgress;
    document.getElementById("progress-conceptual").value = conceptualProgress;
    document.getElementById("progress-problem-statement").value = problemStatementProgress;
    document.getElementById("progress-significance").value = significanceProgress;
    document.getElementById("progress-scope").value = scopeProgress;
    document.getElementById("progress-definition").value = definitionProgress;
    document.getElementById("progress-review").value = reviewProgress;
    document.getElementById("progress-synthesis").value = synthesisProgress;
    document.getElementById("progress-design").value = designProgress;
    document.getElementById("progress-participants").value = participantsProgress;
    document.getElementById("progress-instrument").value = instrumentProgress;
    document.getElementById("progress-procedure").value = procedureProgress;
    document.getElementById("progress-data-anal").value = dataanalProgress;

    const overallProgressBar = document.getElementById("overall-progress");
    overallProgressBar.value = overallProgressPercentage;

    const progressText = document.getElementById("progress-text");
    progressText.textContent = overallProgressPercentage.toFixed(2) + "%";

    localStorage.setItem("introCheckbox", introCheckbox.checked);
    localStorage.setItem("conceptualCheckbox", conceptualCheckbox.checked);
    localStorage.setItem("problemStatementCheckbox", problemStatementCheckbox.checked);
    localStorage.setItem("significanceCheckbox", significanceCheckbox.checked);
    localStorage.setItem("scopeCheckbox", scopeCheckbox.checked);
    localStorage.setItem("definitionCheckbox", definitionCheckbox.checked);
    localStorage.setItem("reviewCheckbox", reviewCheckbox.checked);
    localStorage.setItem("synthesisCheckbox", synthesisCheckbox.checked);
    localStorage.setItem("designCheckbox", designCheckbox.checked);
    localStorage.setItem("participantsCheckbox", participantsCheckbox.checked);
    localStorage.setItem("instrumentCheckbox", instrumentCheckbox.checked);
    localStorage.setItem("procedureCheckbox", procedureCheckbox.checked);
    localStorage.setItem("dataanalCheckbox", dataanalCheckbox.checked);
}

function restoreProgress() {
    const introCheckbox = document.getElementById("introduction");
    const conceptualCheckbox = document.getElementById("conceptual-frame");
    const problemStatementCheckbox = document.getElementById("problem-statement");
    const significanceCheckbox = document.getElementById("significance-prob");
    const scopeCheckbox = document.getElementById("scope-limit");
    const definitionCheckbox = document.getElementById("definition-terms");
    const reviewCheckbox = document.getElementById("rev-rela-liter");
    const synthesisCheckbox = document.getElementById("synthesis");
    const designCheckbox = document.getElementById("design");
    const participantsCheckbox = document.getElementById("participants");
    const instrumentCheckbox = document.getElementById("instrument");
    const procedureCheckbox = document.getElementById("procedure");
    const dataanalCheckbox = document.getElementById("data-anal");
    
    const introCheckboxState = localStorage.getItem("introCheckbox");
    const conceptualCheckboxState = localStorage.getItem("conceptualCheckbox");
    const problemStatementCheckboxState = localStorage.getItem("problemStatementCheckbox");
    const significanceCheckboxState = localStorage.getItem("significanceCheckbox");
    const scopeCheckboxState = localStorage.getItem("scopeCheckbox");
    const definitionCheckboxState = localStorage.getItem("definitionCheckbox");
    const reviewCheckboxState = localStorage.getItem("reviewCheckbox");
    const synthesisCheckboxState = localStorage.getItem("synthesisCheckbox");
    const designCheckboxState = localStorage.getItem("designCheckbox");
    const participantsCheckboxState = localStorage.getItem("participantsCheckbox");
    const instrumentCheckboxState = localStorage.getItem("instrumentCheckbox");
    const procedureCheckboxState = localStorage.getItem("procedureCheckbox");
    const dataanalCheckboxState = localStorage.getItem("dataanalCheckbox");

    if (introCheckboxState !== null) {
        introCheckbox.checked = introCheckboxState === "true";
    }

    if (conceptualCheckboxState !== null) {
      conceptualCheckbox.checked = conceptualCheckboxState === "true";
    }

    if (problemStatementCheckboxState !== null) {
        problemStatementCheckbox.checked = problemStatementCheckboxState === "true";
    }

    if (significanceCheckboxState !== null) {
      significanceCheckbox.checked = significanceCheckboxState === "true";
    }

    if (scopeCheckboxState !== null) {
      scopeCheckbox.checked = scopeCheckboxState === "true";
    }

    if (definitionCheckboxState !== null) {
      definitionCheckbox.checked = definitionCheckboxState === "true";
    }

    if (reviewCheckboxState !== null) {
      reviewCheckbox.checked = reviewCheckboxState === "true";
    }

    if (synthesisCheckboxState !== null) {
      synthesisCheckbox.checked = synthesisCheckboxState === "true";
    }

    if (designCheckboxState !== null) {
      designCheckbox.checked = designCheckboxState === "true";
    }


    if (participantsCheckboxState !== null) {
      participantsCheckbox.checked = participantsCheckboxState === "true";
    }

    if (instrumentCheckboxState !== null) {
      instrumentCheckbox.checked = instrumentCheckboxState === "true";
    }

    if (procedureCheckboxState !== null) {
      procedureCheckbox.checked = procedureCheckboxState === "true";
    }

    if (dataanalCheckboxState !== null) {
      dataanalCheckbox.checked = dataanalCheckboxState === "true";
    }

    updateProgress();
}

document.addEventListener("DOMContentLoaded", restoreProgress);

function search() {
  var input = document.getElementById("searchInput").value.toLowerCase().trim();
  var resultsContainer = document.getElementById("searchResults");
  resultsContainer.innerHTML = "";

  var keywords = {
    "introduction": "introduction",
    "conceptual framework": "conceptual-frame",
    "statement of the problem": "problem-statement",
    "significance of the study": "significance",
    "scope and limitations": "scope",
    "definition of terms": "definition",
    "30 - 50 citation": "citation",
    "synthesis": "synthesis",
    "research design": "design",
    "participants of the study": "participants",
    "research instrument": "instrument",
    "statistical treatment of data": "data-analysis",
};

  if (input !== "") {
    for (var keyword in keywords) {
      if (keyword.includes(input)) {
        var sectionId = keywords[keyword];
        var link = document.createElement("a");
        link.href = "javascript:scrollToSection('" + sectionId + "')";
        link.textContent = keyword;
        resultsContainer.appendChild(link);
      }
    }
  }
}

function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    var scrollPosition = section.offsetTop - 70;
    
    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth"
    });
  }
}