function updateQualiProgress() {
  const introCheckbox = document.getElementById("quali-introduction");
  const conceptualCheckbox = document.getElementById("quali-conceptual-frame");
  const problemStatementCheckbox = document.getElementById("quali-problem-statement");
  const significanceCheckbox = document.getElementById("quali-significance");
  const scopeCheckbox = document.getElementById("quali-scope");
  const definitionCheckbox = document.getElementById("quali-definition");

  const citationCheckbox = document.getElementById("quali-citation");
  const synthesisCheckbox = document.getElementById("quali-synthesis");

  const methodologyCheckbox = document.getElementById("quali-methodology");
  const designCheckbox = document.getElementById("quali-design");
  const techniqueCheckbox = document.getElementById("quali-technique");
  const participantsCheckbox = document.getElementById("quali-participants");
  const instrumentCheckbox = document.getElementById("quali-instrument");
  const procedureCheckbox = document.getElementById("quali-procedure");
  const dataAnalysisCheckbox = document.getElementById("quali-data-analysis");
  const ethicalCheckbox = document.getElementById("quali-ethical");

  const introProgress = introCheckbox.checked ? 13 : 0;
  const conceptualProgress = conceptualCheckbox.checked ? 5 : 0;
  const problemStatementProgress = problemStatementCheckbox.checked ? 7 : 0;
  const significanceProgress = significanceCheckbox.checked ? 5 : 0;
  const scopeProgress = scopeCheckbox.checked ? 8 : 0;
  const definitionProgress = definitionCheckbox.checked ? 7 : 0;

  const citationProgress = citationCheckbox.checked ? 10 : 0;
  const synthesisProgress = synthesisCheckbox.checked ? 5 : 0;

  const methodologyProgress = methodologyCheckbox.checked ? 5 : 0;
  const designProgress = designCheckbox.checked ? 3 : 0;
  const techniqueProgress = techniqueCheckbox.checked ? 3 : 0;
  const participantsProgress = participantsCheckbox.checked ? 3 : 0;
  const instrumentProgress = instrumentCheckbox.checked ? 3 : 0;
  const procedureProgress = procedureCheckbox.checked ? 6 : 0;
  const dataAnalysisProgress = dataAnalysisCheckbox.checked ? 5 : 0;
  const ethicalProgress = ethicalCheckbox.checked ? 10 : 0;

  const totalProgress = introProgress + conceptualProgress + problemStatementProgress + significanceProgress + scopeProgress + definitionProgress + citationProgress + synthesisProgress + methodologyProgress + designProgress + techniqueProgress + participantsProgress + instrumentProgress + procedureProgress + dataAnalysisProgress + ethicalProgress;
  const overallProgressPercentage = (totalProgress / 98) * 100;

  document.getElementById("quali-progress-introduction").value = introProgress;
  document.getElementById("quali-progress-conceptual").value = conceptualProgress;
  document.getElementById("quali-progress-problem-statement").value = problemStatementProgress;
  document.getElementById("quali-progress-significance").value = significanceProgress;
  document.getElementById("quali-progress-scope").value = scopeProgress;
  document.getElementById("quali-progress-definition").value = definitionProgress;
  document.getElementById("quali-progress-citation").value = citationProgress;
  document.getElementById("quali-progress-synthesis").value = synthesisProgress;
  document.getElementById("quali-progress-methodology").value = methodologyProgress;
  document.getElementById("quali-progress-design").value = designProgress;
  document.getElementById("quali-progress-technique").value = techniqueProgress;
  document.getElementById("quali-progress-participants").value = participantsProgress;
  document.getElementById("quali-progress-instrument").value = instrumentProgress;
  document.getElementById("quali-progress-procedure").value = procedureProgress;
  document.getElementById("quali-progress-data-analysis").value = dataAnalysisProgress;
  document.getElementById("quali-progress-ethical").value = ethicalProgress;

  const overallProgressBar = document.getElementById("quali-overall-progress");
  overallProgressBar.value = overallProgressPercentage;

  const progressText = document.getElementById("quali-progress-text");
  progressText.textContent = overallProgressPercentage.toFixed(2) + "%";

  localStorage.setItem("quali-introduction", introCheckbox.checked);
  localStorage.setItem("quali-conceptual-frame", conceptualCheckbox.checked);
  localStorage.setItem("quali-problem-statement", problemStatementCheckbox.checked);
  localStorage.setItem("quali-significance", significanceCheckbox.checked);
  localStorage.setItem("quali-scope", scopeCheckbox.checked);
  localStorage.setItem("quali-definition", definitionCheckbox.checked);
  localStorage.setItem("quali-citation", citationCheckbox.checked);
  localStorage.setItem("quali-synthesis", synthesisCheckbox.checked);
  localStorage.setItem("quali-methodology", methodologyCheckbox.checked);
  localStorage.setItem("quali-design", designCheckbox.checked);
  localStorage.setItem("quali-technique", techniqueCheckbox.checked);
  localStorage.setItem("quali-participants", participantsCheckbox.checked);
  localStorage.setItem("quali-instrument", instrumentCheckbox.checked);
  localStorage.setItem("quali-procedure", procedureCheckbox.checked);
  localStorage.setItem("quali-data-analysis", dataAnalysisCheckbox.checked);
  localStorage.setItem("quali-ethical", ethicalCheckbox.checked);
}

function restoreQualiProgress() {
  const checkboxes = [
    "quali-introduction",
    "quali-conceptual-frame",
    "quali-problem-statement",
    "quali-significance",
    "quali-scope",
    "quali-definition",
    "quali-citation",
    "quali-synthesis",
    "quali-methodology",
    "quali-design",
    "quali-technique",
    "quali-participants",
    "quali-instrument",
    "quali-procedure",
    "quali-data-analysis",
    "quali-ethical"
  ];

  checkboxes.forEach((checkboxId) => {
    const checkbox = document.getElementById(checkboxId);
    const checkboxState = localStorage.getItem(checkboxId);

    if (checkboxState !== null) {
      checkbox.checked = checkboxState === "true";
    }
  });

  updateQualiProgress();
}

document.addEventListener("DOMContentLoaded", restoreQualiProgress);

function search() {
  var input = document.getElementById("searchInput").value.toLowerCase().trim();
  var resultsContainer = document.getElementById("searchResults");
  resultsContainer.innerHTML = "";

  var keywords = {
    "introduction": "quali-introduction",
    "conceptual framework": "quali-conceptual-frame",
    "statement of the problem": "quali-problem-statement",
    "significance of the study": "quali-significance",
    "scope and limitations": "quali-scope",
    "definition of terms": "quali-definition",
    "30 - 50 citation": "quali-citation",
    "synthesis": "quali-synthesis",
    "methodology": "quali-methodology",
    "research design": "quali-design",
    "sampling technique": "quali-technique",
    "participants of the study": "quali-participants",
    "research instrument": "quali-instrument",
    "data analysis": "quali-data-analysis",
    "ethical considerations": "quali-ethical",
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






