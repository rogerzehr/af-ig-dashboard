// Mock Data - Replace with actual data fetching logic in a real application
const mockData = {
    unit: {
        name: "325th Fighter Wing",
        location: "Tyndall AFB",
        commanderName: "Col. James Wilson",
    },
    compliance: {
        programs: 35,
        completedPrograms: 24,
        completionPercentage: 68,
        openDeficiencies: 17,
        deficienciesChange: 4, // Added change data
        highRiskItems: 5,
        criticalItems: 2
    },
    trends: {
        months: ["Dec", "Jan", "Feb", "Mar", "Apr", "May"],
        managingResources: [78, 80, 82, 79, 83, 85],
        leadingPeople: [85, 87, 90, 91, 89, 92],
        improvingUnit: [72, 70, 74, 75, 77, 78],
        executingMission: [80, 82, 84, 85, 87, 88],
        predictions: {
            managingResources: [87, 89], // Adjusted prediction data
            leadingPeople: [93, 94],
            improvingUnit: [80, 82],
            executingMission: [90, 91]
        },
        readinessCategories: ["Managing Resources", "Leading People", "Improving Unit", "Executing Mission"],
        readinessColors: ["blue", "green", "yellow", "purple"] // Added colors for categories
    },
    deficiencies: [
        { id: "IG-2025-001", description: "Safety equipment inspection records incomplete", squadron: "Fighter", status: "Open", riskLevel: "Critical", dueDate: "2025-05-30" },
        { id: "IG-2025-007", description: "Training documentation non-compliant with AFI 36-2651", squadron: "Maintenance", status: "Open", riskLevel: "Significant", dueDate: "2025-06-15" },
        { id: "IG-2025-013", description: "Security protocols for restricted area access not followed", squadron: "Support", status: "In Progress", riskLevel: "Critical", dueDate: "2025-05-22" },
        { id: "IG-2025-018", description: "Radiation safety procedures not properly documented", squadron: "Medical", status: "Open", riskLevel: "Significant", dueDate: "2025-06-10" },
        { id: "IG-2025-024", description: "Tool accountability process deficiencies", squadron: "Maintenance", status: "In Progress", riskLevel: "Significant", dueDate: "2025-05-25" },
        { id: "IG-2025-026", description: "Emergency response checklists outdated", squadron: "All", status: "Open", riskLevel: "Significant", dueDate: "2025-06-05" },
        { id: "IG-2025-029", description: "FOD prevention program documentation incomplete", squadron: "Maintenance", status: "Open", riskLevel: "Minor", dueDate: "2025-06-20" }
    ],
    aiRecommendations: [
        "Implement a centralized tracking system for safety equipment inspections with automated reminders.",
        "Conduct specialized training session for all Unit Training Managers on AFI 36-2651 compliance requirements.",
        "Develop a digital checklist app for security personnel to ensure all protocols are followed consistently.",
        "Establish monthly radiation safety documentation review cycle with designated officer accountability.",
        "Deploy barcode-based tool accountability system synced with maintenance management system."
    ],
    aiInsights: {
        keyThemes: [
            "Documentation processes need standardization across all squadrons",
            "Digital transformation of manual inspection processes would improve compliance",
            "Training deficiencies correlate with higher risk in operational areas"
        ],
        sentiment: "Moderately Concerning",
        recommendedFocus: "Training documentation and safety protocol implementation"
    },
    talkingPoints: [
        "Critical safety inspection documentation gaps identified across 3 squadrons - recommend Wing-level standardized process implementation",
        "Training record compliance improved 12% over last quarter but still below MAJCOM average - targeted UTM training in progress",
        "Automated tracking tools demonstrating 30% reduction in recurring deficiencies where implemented - recommend expanded deployment"
    ],
    automationStatus: {
        lastMICTSync: "Today, 08:45",
        lastIGEMSUpdate: "Yesterday, 16:30",
        aiModelStatus: "Operational"
    }
};

// Global variable for the trends chart instance
let trendsChartInstance = null;

// Initialize page on load
document.addEventListener('DOMContentLoaded', function() {
    // Set current date
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-US', dateOptions);

    // Populate initial data
    populateComplianceSnapshot();
    populateAutomationStatus();
    populateAIInsights(); // Populate initial AI Insights
    populateAIRemendations(); // Populate initial AI Recommendations

    // Initialize collapsible panels
    initializeCollapsiblePanels();

    // Initialize Trends Chart
    initTrendsChart();

    // Populate deficiency table
    populateDeficiencyTable(mockData.deficiencies); // Initial population

    // Set up event listeners
    setupEventListeners();

    // Populate squadron filter options
    populateSquadronFilter();

     // Initial population of unit name
    document.getElementById('unitName').textContent = mockData.unit.name;
});

// Function to populate Compliance Snapshot data
function populateComplianceSnapshot() {
    const completionBar = document.getElementById('completionBar');
    const completionText = document.getElementById('completionText');
    const programsText = document.getElementById('programsText');
    const deficienciesCount = document.getElementById('deficienciesCount');
    const deficienciesChange = document.getElementById('deficienciesChange');
    const highRiskCount = document.getElementById('highRiskCount');
    const criticalCount = document.getElementById('criticalCount');
    const aiSummary = document.getElementById('aiSummary');

    const compliance = mockData.compliance;

    completionBar.style.width = compliance.completionPercentage + '%';
    completionText.textContent = compliance.completionPercentage + '% Complete';
    programsText.textContent = `${compliance.completedPrograms} of ${compliance.programs} Programs`;
    deficienciesCount.textContent = compliance.openDeficiencies;
    deficienciesChange.textContent = compliance.deficienciesChange;
    highRiskCount.textContent = compliance.highRiskItems;
    criticalCount.textContent = compliance.criticalItems;

    // Populate AI Summary
    let summaryHtml = '<p><strong>Top 3 Recurring Issues:</strong></p><ol class="list-decimal pl-5 mt-1">';
    mockData.aiInsights.keyThemes.forEach(theme => {
        summaryHtml += `<li>${theme}</li>`;
    });
    summaryHtml += '</ol>';
    aiSummary.innerHTML = summaryHtml;
}

// Function to populate Automation Status data
function populateAutomationStatus() {
    const automationStatusDiv = document.getElementById('automationStatus');
    const status = mockData.automationStatus;

    automationStatusDiv.innerHTML = `
        <div class="flex items-center mb-1">
            <div class="w-3 h-3 rounded-full ${status.lastMICTSync !== 'N/A' ? 'bg-green-500' : 'bg-gray-400'} mr-2"></div>
            <span>Last MICT Sync: ${status.lastMICTSync}</span>
        </div>
        <div class="flex items-center mb-1">
            <div class="w-3 h-3 rounded-full ${status.lastIGEMSUpdate !== 'N/A' ? 'bg-yellow-500' : 'bg-gray-400'} mr-2"></div>
            <span>Last IGEMS Update: ${status.lastIGEMSUpdate}</span>
        </div>
        <div class="flex items-center">
            <div class="w-3 h-3 rounded-full ${status.aiModelStatus === 'Operational' ? 'bg-green-500' : 'bg-red-500'} mr-2"></div>
            <span>AI Model Status: ${status.aiModelStatus}</span>
        </div>
    `;
}

// Function to populate AI Insights data
function populateAIInsights() {
    const aiInsightsOutput = document.getElementById('aiInsightsOutput');
    const insights = mockData.aiInsights;

    aiInsightsOutput.innerHTML = `
        <p><strong>Sentiment:</strong> ${insights.sentiment}</p>
        <p class="mt-1"><strong>Recommended Focus:</strong> ${insights.recommendedFocus}</p>
        <p class="mt-2"><strong>Key Themes:</strong></p>
        <ul class="list-disc pl-5 mt-1">
            ${insights.keyThemes.map(theme => `<li>${theme}</li>`).join('')}
        </ul>
    `;
}

// Function to populate AI Recommendations
function populateAIRemendations() {
    const recommendationsOutput = document.getElementById('recommendationsOutput');
    if (mockData.aiRecommendations && mockData.aiRecommendations.length > 0) {
        let recommendationsHtml = '<ul class="list-disc pl-5">';
        mockData.aiRecommendations.forEach(rec => {
            recommendationsHtml += `<li>${rec}</li>`;
        });
        recommendationsHtml += '</ul>';
        recommendationsOutput.innerHTML = recommendationsHtml;
    } else {
        recommendationsOutput.innerHTML = '<p class="italic text-gray-400">Click "Generate Corrective Actions" to get AI recommendations based on current compliance data.</p>';
    }
}


// Function to initialize collapsible panels
function initializeCollapsiblePanels() {
    document.querySelectorAll('.toggle-collapse').forEach(button => {
        button.addEventListener('click', function() {
            const cardElement = this.closest('.card');
            cardElement.classList.toggle('collapsed');

            // Toggle the chevron icon
            const icon = this.querySelector('i');
            if (cardElement.classList.contains('collapsed')) {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });

        // Start with panels expanded by default
        const cardElement = button.closest('.card');
        cardElement.classList.add('collapsed'); // Add 'collapsed' class initially
        const icon = button.querySelector('i');
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up'); // Set icon to 'up' initially
    });
}

// Initialize Trends Chart
function initTrendsChart() {
    const ctx = document.getElementById('trendsChart').getContext('2d');

    if (trendsChartInstance) {
        trendsChartInstance.destroy(); // Destroy existing chart if it exists
    }

    trendsChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: mockData.trends.months,
            datasets: [
                {
                    label: 'Managing Resources',
                    data: mockData.trends.managingResources,
                    borderColor: 'rgba(59, 130, 246, 1)', // blue-500
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    tension: 0.3,
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(59, 130, 246, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(59, 130, 246, 1)'
                },
                {
                    label: 'Leading People',
                    data: mockData.trends.leadingPeople,
                    borderColor: 'rgba(16, 185, 129, 1)', // green-500
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    tension: 0.3,
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(16, 185, 129, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(16, 185, 129, 1)'
                },
                {
                    label: 'Improving Unit',
                    data: mockData.trends.improvingUnit,
                    borderColor: 'rgba(245, 158, 11, 1)', // yellow-500
                    backgroundColor: 'rgba(245, 158, 11, 0.1)',
                    tension: 0.3,
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(245, 158, 11, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(245, 158, 11, 1)'
                },
                {
                    label: 'Executing Mission',
                    data: mockData.trends.executingMission,
                    borderColor: 'rgba(139, 92, 246, 1)', // purple-500
                    backgroundColor: 'rgba(139, 92, 246, 0.1)',
                    tension: 0.3,
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(139, 92, 246, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(139, 92, 246, 1)'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: false,
                    min: 60, // Start Y-axis at 60 for better trend visibility
                    max: 100, // Max Y-axis at 100
                    title: {
                        display: true,
                        text: 'Readiness Score (%)',
                        color: '#4B5563' // gray-600
                    },
                    ticks: {
                        stepSize: 5, // Show ticks every 5 units
                        color: '#4B5563' // gray-600
                    },
                    grid: {
                        color: '#E5E7EB' // gray-200
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Month',
                        color: '#4B5563' // gray-600
                    },
                     ticks: {
                        color: '#4B5563' // gray-600
                    },
                     grid: {
                        color: '#E5E7EB' // gray-200
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 12,
                        font: {
                            size: 10
                        },
                        color: '#4B5563' // gray-600
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: 'rgba(0, 0, 0, 0.7)',
                    borderWidth: 1,
                    cornerRadius: 4,
                    displayColors: true,
                }
            },
             hover: {
                mode: 'nearest',
                intersect: true
            }
        }
    });

    // Populate readiness scores below the chart
    populateReadinessScores();
}

// Function to populate readiness scores below the chart
function populateReadinessScores() {
    const readinessScoresDiv = document.getElementById('readinessScores');
    readinessScoresDiv.innerHTML = ''; // Clear existing content

    const categories = mockData.trends.readinessCategories;
    const latestScores = [
        mockData.trends.managingResources[mockData.trends.managingResources.length - 1],
        mockData.trends.leadingPeople[mockData.trends.leadingPeople.length - 1],
        mockData.trends.improvingUnit[mockData.trends.improvingUnit.length - 1],
        mockData.trends.executingMission[mockData.trends.executingMission.length - 1]
    ];
    const colors = mockData.trends.readinessColors;

    categories.forEach((category, index) => {
        const scoreDiv = document.createElement('div');
        scoreDiv.className = `p-2 rounded bg-${colors[index]}-50`; // Use Tailwind color classes
        scoreDiv.innerHTML = `
            <div class="text-xs text-gray-500">${category}</div>
            <div class="font-bold text-${colors[index]}-700">${latestScores[index]}%</div>
        `;
        readinessScoresDiv.appendChild(scoreDiv);
    });
}


// Toggle predictions in chart
function togglePredictions(showPredictions) {
    const chartData = trendsChartInstance.data;
    const months = mockData.trends.months;

    if (showPredictions) {
        // Add prediction months
        chartData.labels = [...months, 'Jun', 'Jul']; // Assuming 2 months of prediction

        // Update datasets with predictions
        chartData.datasets.forEach((dataset, index) => {
            let predictedData;
            switch(index) {
                case 0:
                    predictedData = mockData.trends.managingResources.concat(mockData.trends.predictions.managingResources);
                    break;
                case 1:
                    predictedData = mockData.trends.leadingPeople.concat(mockData.trends.predictions.leadingPeople);
                    break;
                case 2:
                    predictedData = mockData.trends.improvingUnit.concat(mockData.trends.predictions.improvingUnit);
                    break;
                case 3:
                    predictedData = mockData.trends.executingMission.concat(mockData.trends.predictions.executingMission);
                    break;
                default:
                    predictedData = dataset.data; // Keep original data if index doesn't match
            }
            dataset.data = predictedData;

            // Mark predictions with dashed line style for the predicted segment
            const originalLength = mockData.trends.months.length;
            const totalLength = dataset.data.length;
            const borderDashArray = new Array(totalLength).fill(0); // Solid line initially
            for (let i = originalLength; i < totalLength; i++) {
                 borderDashArray[i] = [5, 5]; // Dashed line for prediction points
            }
             dataset.borderDash = borderDashArray;
             dataset.spanGaps = true; // Ensure the dashed line connects across gaps
        });
    } else {
        // Reset to original data without predictions
        chartData.labels = months;
        chartData.datasets.forEach((dataset, index) => {
             switch(index) {
                case 0:
                    dataset.data = mockData.trends.managingResources;
                    break;
                case 1:
                    dataset.data = mockData.trends.leadingPeople;
                    break;
                case 2:
                    dataset.data = mockData.trends.improvingUnit;
                    break;
                case 3:
                    dataset.data = mockData.trends.executingMission;
                    break;
                default:
                    // Should not happen with current data structure
                    break;
            }
            // Remove dashed line style
            dataset.borderDash = undefined;
            dataset.spanGaps = false; // Reset spanGaps
        });
    }

    trendsChartInstance.update(); // Update the chart
}

// Populate deficiency table
function populateDeficiencyTable(deficienciesToDisplay) {
    const tableBody = document.getElementById('deficiencyTableBody');
    tableBody.innerHTML = ''; // Clear existing rows

    if (!deficienciesToDisplay || deficienciesToDisplay.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="7" class="text-center py-4 text-gray-500">No deficiencies found for the selected filter.</td></tr>';
        return;
    }

    deficienciesToDisplay.forEach(deficiency => {
        const row = document.createElement('tr');
        row.className = 'border-b border-gray-200 hover:bg-gray-50';

        // Set row color based on risk level
        let riskBadgeClass = 'bg-gray-100 text-gray-800';
        if (deficiency.riskLevel === 'Critical') {
            riskBadgeClass = 'bg-red-100 text-red-800';
        } else if (deficiency.riskLevel === 'Significant') {
            riskBadgeClass = 'bg-yellow-100 text-yellow-800';
        } else if (deficiency.riskLevel === 'Minor') {
             riskBadgeClass = 'bg-green-100 text-green-800'; // Assuming minor is green/less severe
        }

        // Set status badge color
        let statusBadgeClass = 'bg-gray-100 text-gray-800';
        if (deficiency.status === 'Open') {
            statusBadgeClass = 'bg-red-100 text-red-800';
        } else if (deficiency.status === 'In Progress') {
            statusBadgeClass = 'bg-yellow-100 text-yellow-800';
        } else if (deficiency.status === 'Closed') {
            statusBadgeClass = 'bg-green-100 text-green-800';
        }


        row.innerHTML = `
            <td class="py-2 px-3">${deficiency.id}</td>
            <td class="py-2 px-3">${deficiency.description}</td>
            <td class="py-2 px-3">${deficiency.squadron}</td>
            <td class="py-2 px-3">
                <span class="px-2 py-1 rounded-full text-xs ${statusBadgeClass}">${deficiency.status}</span>
            </td>
            <td class="py-2 px-3">
                <span class="px-2 py-1 rounded-full text-xs ${riskBadgeClass}">${deficiency.riskLevel}</span>
            </td>
            <td class="py-2 px-3">${deficiency.dueDate}</td>
            <td class="py-2 px-3">
                <button class="text-blue-600 hover:text-blue-900 mr-2 view-deficiency" data-deficiency-id="${deficiency.id}" title="View Details">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="text-green-600 hover:text-green-900 edit-deficiency" data-deficiency-id="${deficiency.id}" title="Edit">
                    <i class="fas fa-edit"></i>
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to filter deficiencies based on risk level
function filterDeficiencies(riskLevel) {
    const filteredDeficiencies = mockData.deficiencies.filter(deficiency => {
        if (riskLevel === 'all') {
            return true; // Show all deficiencies
        }
        return deficiency.riskLevel.toLowerCase() === riskLevel.toLowerCase();
    });
    populateDeficiencyTable(filteredDeficiencies);
}

// Function to populate squadron filter options dynamically
function populateSquadronFilter() {
    const squadronFilterSelect = document.getElementById('squadronFilter');
    const squadrons = [...new Set(mockData.deficiencies.map(def => def.squadron))]; // Get unique squadrons
    squadrons.sort(); // Sort squadrons alphabetically

    // Add 'All Squadrons' option first
    squadronFilterSelect.innerHTML = '<option value="all">All Squadrons</option>';

    // Add unique squadron options
    squadrons.forEach(squadron => {
        const option = document.createElement('option');
        option.value = squadron.toLowerCase().replace(/\s+/g, ''); // Create a simple value
        option.textContent = squadron;
        squadronFilterSelect.appendChild(option);
    });
}


// Set up event listeners
function setupEventListeners() {
    // Predictions Toggle
    document.getElementById('predictionsToggle').addEventListener('change', function(event) {
        togglePredictions(event.target.checked);
    });

    // Deficiency Filter
    document.getElementById('deficiencyFilter').addEventListener('change', function(event) {
        filterDeficiencies(event.target.value);
    });

    // Squadron Filter (for trends chart - basic implementation)
    document.getElementById('squadronFilter').addEventListener('change', function(event) {
        // TODO: Implement filtering logic for the trends chart based on selected squadron
        console.log("Squadron filter changed to:", event.target.value);
        // This would require updating the chart data based on the selected squadron
        // For now, it just logs the selection.
    });

    // Generate Corrective Actions Button
    document.getElementById('generateActions').addEventListener('click', function() {
        // Simulate AI generation
        const recommendationsOutput = document.getElementById('recommendationsOutput');
        recommendationsOutput.innerHTML = '<p class="italic text-gray-400">Generating recommendations...</p>';
        setTimeout(() => {
            populateAIRemendations(); // Repopulate with mock recommendations
            alert('Corrective actions generated (using mock data).'); // Using alert for simulation, replace with a modal in production
        }, 1500); // Simulate a delay
    });

    // Sync MICT Status Button
    document.getElementById('syncMICT').addEventListener('click', function() {
        const syncSpinner = document.getElementById('syncSpinner');
        const syncButtonText = this.querySelector('span');

        syncButtonText.textContent = 'Syncing...';
        syncSpinner.style.display = 'inline-block'; // Show spinner
        this.disabled = true; // Disable button during sync

        // Simulate sync process
        setTimeout(() => {
            // Update mock data or fetch real data here
            mockData.automationStatus.lastMICTSync = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
             mockData.automationStatus.aiModelStatus = 'Operational'; // Assume success
            populateAutomationStatus(); // Update status display

            syncButtonText.textContent = 'Sync MICT Status';
            syncSpinner.style.display = 'none'; // Hide spinner
            this.disabled = false; // Enable button

            alert('MICT status synced (using mock data).'); // Using alert for simulation
        }, 2000); // Simulate a delay
    });

    // File Upload Input (basic handling)
    document.getElementById('fileUpload').addEventListener('change', function(event) {
        const files = event.target.files;
        if (files.length > 0) {
            console.log("Uploaded file:", files[0].name);
            // TODO: Implement file processing and AI analysis logic here
            const aiInsightsOutput = document.getElementById('aiInsightsOutput');
            aiInsightsOutput.innerHTML = `<p class="italic text-gray-400">Processing file: ${files[0].name}...</p>`;
            document.getElementById('summarizeReport').disabled = false; // Enable summarize button
             alert(`File "${files[0].name}" uploaded. (Processing not implemented)`); // Using alert for simulation
        }
    });

    // Summarize Report Button
    document.getElementById('summarizeReport').addEventListener('click', function() {
        // TODO: Implement report summarization logic
        const aiInsightsOutput = document.getElementById('aiInsightsOutput');
        aiInsightsOutput.innerHTML = '<p class="italic text-gray-400">Summarizing report...</p>';
         alert('Summarize report functionality not implemented.'); // Using alert for simulation
         // After summarization, you would populate aiInsightsOutput with the summary
    });

    // Generate IG Talking Points Button
    document.getElementById('generateTalkingPoints').addEventListener('click', function() {
         // Simulate AI generation
        const aiInsightsOutput = document.getElementById('aiInsightsOutput');
        aiInsightsOutput.innerHTML = '<p class="italic text-gray-400">Generating talking points...</p>';
        setTimeout(() => {
            let tpHtml = '<p><strong>IG Talking Points:</strong></p><ul class="list-disc pl-5 mt-1">';
            mockData.talkingPoints.forEach(point => {
                tpHtml += `<li>${point}</li>`;
            });
            tpHtml += '</ul>';
            aiInsightsOutput.innerHTML = tpHtml;
             alert('IG Talking Points generated (using mock data).'); // Using alert for simulation
        }, 1500); // Simulate a delay
    });

    // Event delegation for Deficiency Table buttons (View and Edit)
    document.getElementById('deficiencyTableBody').addEventListener('click', function(event) {
        const target = event.target.closest('button');
        if (!target) return; // Not a button

        const deficiencyId = target.dataset.deficiencyId;

        if (target.classList.contains('view-deficiency')) {
            console.log("View Deficiency:", deficiencyId);
            // TODO: Implement logic to display deficiency details
            alert(`View details for Deficiency ID: ${deficiencyId} (Functionality not implemented)`); // Using alert for simulation
        } else if (target.classList.contains('edit-deficiency')) {
            console.log("Edit Deficiency:", deficiencyId);
            // TODO: Implement logic to edit deficiency
            alert(`Edit functionality for Deficiency ID: ${deficiencyId} (Functionality not implemented)`); // Using alert for simulation
        }
    });


}
