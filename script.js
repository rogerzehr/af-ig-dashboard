// Mock Data - Updated with Fictional 100 ARW UEI 2026 Data including more squadrons
const mockData = {
    unit: {
        name: "100th Air Refueling Wing", // Updated unit name
        location: "Mildenhall AB, UK", // Updated location
        commanderName: "Col. Jane Doe", // Fictional Commander
    },
    compliance: {
        programs: 45, // Updated total programs to reflect added squadrons
        completedPrograms: 35, // Updated completed programs
        completionPercentage: 78, // Adjusted completion percentage based on new total
        openDeficiencies: 12, // Updated open deficiencies
        deficienciesChange: -5, // Adjusted change data
        highRiskItems: 8, // Updated high risk items (Critical + Significant)
        criticalItems: 3 // Updated critical items
    },
    trends: {
        months: ["Jan 26", "Feb 26", "Mar 26", "Apr 26", "May 26", "Jun 26"], // Updated months
        managingResources: [80, 82, 81, 83, 84, 85], // Adjusted trend data slightly
        leadingPeople: [87, 88, 89, 88, 90, 91], // Adjusted trend data slightly
        improvingUnit: [74, 75, 77, 76, 78, 79], // Adjusted trend data slightly
        executingMission: [84, 86, 85, 87, 88, 89], // Adjusted trend data slightly
        predictions: {
            managingResources: [86, 87], // Updated prediction data
            leadingPeople: [92, 93], // Updated prediction data
            improvingUnit: [80, 81], // Updated prediction data
            executingMission: [90, 91] // Updated prediction data
        },
        readinessCategories: ["Managing Resources", "Leading People", "Improving Unit", "Executing Mission"],
        readinessColors: ["blue", "green", "yellow", "purple"] // Colors remain the same
    },
    deficiencies: [
        // Updated deficiencies based on the fictional report and added squadrons
        { id: "IG-2026-003", description: "Critical safety procedure non-compliance in fuel cell maintenance.", squadron: "100 MXS", status: "Open", riskLevel: "Critical", dueDate: "2026-08-15" }, // Assigned to 100 MXS
        { id: "IG-2026-011", description: "Failure to track mandatory cyber awareness training.", squadron: "100 OSS", status: "Open", riskLevel: "Critical", dueDate: "2026-08-30" }, // Assigned to 100 OSS
        { id: "IG-2026-019", description: "Discrepancies in hazardous material handling and storage documentation.", squadron: "100 LRS", status: "Open", riskLevel: "Significant", dueDate: "2026-09-10" }, // Assigned to 100 LRS (Logistics Readiness Squadron)
        { id: "IG-2026-022", description: "Inconsistent application of personnel readiness reporting standards.", squadron: "100 FSS", status: "In Progress", riskLevel: "Significant", dueDate: "2026-09-01" }, // Assigned to 100 FSS
        { id: "IG-2026-035", description: "Gaps in maintaining up-to-date medical readiness records for deployed personnel.", squadron: "100 MDG", status: "Open", riskLevel: "Significant", dueDate: "2026-09-20" }, // Assigned to 100 MDG (Medical Group)
        { id: "IG-2026-041", description: "Failure to conduct required quarterly physical security checks on critical network infrastructure nodes.", squadron: "100 CS", status: "Open", riskLevel: "Significant", dueDate: "2026-08-25" }, // Assigned to 100 CS (Communications Squadron)
        { id: "IG-2026-055", description: "Minor discrepancies in facility maintenance logs.", squadron: "100 CES", status: "Closed", riskLevel: "Minor", dueDate: "2026-07-31" }, // Assigned to 100 CES (Civil Engineer Squadron)
        { id: "IG-2026-068", description: "Incomplete vehicle inspection checklists for a small percentage of fleet vehicles.", squadron: "100 SFS", status: "In Progress", riskLevel: "Minor", dueDate: "2026-08-10" }, // Assigned to 100 SFS (Security Forces Squadron)
        { id: "IG-2026-072", description: "Minor errors found in a sample of travel voucher submissions.", squadron: "100 CPTS", status: "Open", riskLevel: "Minor", dueDate: "2026-08-05" }, // Assigned to 100 CPTS (Comptroller Squadron)
        // Added deficiencies for requested squadrons
        { id: "IG-2026-080", description: "Discrepancies in dining facility sanitation logs.", squadron: "100 FSS", status: "Open", riskLevel: "Minor", dueDate: "2026-09-05" },
        { id: "IG-2026-081", description: "Aircrew flight record documentation incomplete.", squadron: "100 OSS", status: "In Progress", riskLevel: "Significant", dueDate: "2026-09-18" },
        { id: "IG-2026-082", description: "Tool kit inventory discrepancies in multiple sections.", squadron: "100 MXS", status: "Open", riskLevel: "Significant", dueDate: "2026-09-25" },
        { id: "IG-2026-083", description: "Missing entries in physical training exemption waivers.", squadron: "100 FSS", status: "Closed", riskLevel: "Minor", dueDate: "2026-07-28" },
        { id: "IG-2026-084", description: "Airfield driving records not updated for new personnel.", squadron: "100 OSS", status: "Open", riskLevel: "Minor", dueDate: "2026-09-12" },
         { id: "IG-2026-085", description: "Hazardous waste disposal procedures not followed consistently.", squadron: "100 MXS", status: "In Progress", riskLevel: "Critical", dueDate: "2026-09-30" } // Added another critical for MXS
    ],
    aiRecommendations: [
        // Updated recommendations based on new deficiencies
        "Mandate hands-on refresher training for all fuel cell maintenance personnel focusing on TO adherence.",
        "Implement an automated tracking system for mandatory training completion, integrated with network access controls.",
        "Conduct a comprehensive audit of all hazardous material storage areas and update documentation to match current inventory and regulations.",
        "Standardize personnel readiness reporting procedures across all squadrons and provide targeted training to unit administrators.",
        "Develop a digital checklist and reporting system for physical security checks on critical infrastructure.",
        "Review and streamline facility maintenance logging procedures for clarity and ease of use.",
        "Implement a daily checklist for dining facility sanitation logs with mandatory supervisor sign-off.",
        "Conduct a Wing-wide review of aircrew flight record documentation processes and provide unit-level training.",
        "Initiate a 100% inventory of all tool kits in 100 MXS and reconcile discrepancies; implement a digital tracking system.",
        "Establish a quarterly audit process for physical training exemption waivers.",
        "Update and disseminate airfield driving regulations and ensure all personnel requiring access receive timely training.",
        "Reinforce hazardous waste disposal training and conduct unannounced spot checks in maintenance areas."
    ],
    aiInsights: {
        // Updated insights based on the fictional report and added deficiencies
        keyThemes: [
            "Critical procedural compliance gaps persist in maintenance and cyber security areas.",
            "Documentation and record-keeping inconsistencies are widespread across multiple squadrons (FSS, OSS, MXS, LRS, MDG).",
            "Opportunities exist to leverage technology for improved tracking, documentation, and compliance.",
            "Operational readiness remains high, but foundational compliance issues pose potential risks.",
            "Specific focus needed on maintenance safety and personnel readiness data accuracy."
        ],
        sentiment: "Generally Positive with Significant Compliance Concerns", // Updated sentiment
        recommendedFocus: "Addressing critical safety and cyber gaps; standardizing documentation and tracking processes." // Updated focus
    },
    talkingPoints: [
        // Updated talking points based on the fictional report and added deficiencies
        "The 100 ARW achieved an 'Effective' UEI rating, showcasing strong operational performance.",
        "We have identified critical deficiencies in fuel cell maintenance safety and cyber training that require immediate, aggressive action.",
        "Documentation and record-keeping challenges were noted across several squadrons; we are implementing measures to improve accuracy and compliance.",
        "Automated tools are being explored to enhance tracking and streamline processes, particularly in maintenance and personnel management.",
        "Our focus remains on reinforcing foundational compliance while maintaining our high state of operational readiness."
    ],
    automationStatus: {
        lastMICTSync: "Today, 11:30", // Simulated update
        lastIGEMSUpdate: "Today, 10:00", // Simulated update
        aiModelStatus: "Operational" // Status remains operational
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
    deficienciesChange.textContent = compliance.deficienciesChange; // Display the change value
    // Determine if the change is an increase or decrease for the arrow icon
    const changeIcon = deficienciesChange.previousElementSibling; // Assuming the icon is the previous sibling
     if (compliance.deficienciesChange > 0) {
         changeIcon.classList.remove('fa-arrow-down', 'text-green-500');
         changeIcon.classList.add('fa-arrow-up', 'text-red-500');
     } else if (compliance.deficienciesChange < 0) {
         changeIcon.classList.remove('fa-arrow-up', 'text-red-500');
         changeIcon.classList.add('fa-arrow-down', 'text-green-500');
     } else {
         changeIcon.classList.remove('fa-arrow-up', 'fa-arrow-down', 'text-red-500', 'text-green-500');
         // You might add a neutral icon or just leave it as it is if no change
     }


    highRiskCount.textContent = compliance.highRiskItems;
    criticalCount.textContent = compliance.criticalItems;

    // Populate AI Summary
    let summaryHtml = '<p><strong>Top Recurring Issues:</strong></p><ol class="list-decimal pl-5 mt-1">'; // Adjusted title slightly
    if (mockData.aiInsights && mockData.aiInsights.keyThemes && mockData.aiInsights.keyThemes.length > 0) {
        mockData.aiInsights.keyThemes.forEach(theme => {
            summaryHtml += `<li>${theme}</li>`;
        });
        summaryHtml += '</ol>';
         aiSummary.innerHTML = summaryHtml;
    } else {
         aiSummary.innerHTML = '<p class="italic text-gray-400">AI summary not available.</p>';
    }

}

// Function to populate Automation Status data
function populateAutomationStatus() {
    const automationStatusDiv = document.getElementById('automationStatus');
    const status = mockData.automationStatus;

    automationStatusDiv.innerHTML = `
        <div class="flex items-center mb-1">
            <div class="w-3 h-3 rounded-full ${status.lastMICTSync && status.lastMICTSync !== 'N/A' ? 'bg-green-500' : 'bg-gray-400'} mr-2"></div>
            <span>Last MICT Sync: ${status.lastMICTSync || 'N/A'}</span>
        </div>
        <div class="flex items-center mb-1">
            <div class="w-3 h-3 rounded-full ${status.lastIGEMSUpdate && status.lastIGEMSUpdate !== 'N/A' ? 'bg-yellow-500' : 'bg-gray-400'} mr-2"></div>
            <span>Last IGEMS Update: ${status.lastIGEMSUpdate || 'N/A'}</span>
        </div>
        <div class="flex items-center">
            <div class="w-3 h-3 rounded-full ${status.aiModelStatus === 'Operational' ? 'bg-green-500' : (status.aiModelStatus === 'Unknown' ? 'bg-gray-400' : 'bg-red-500')} mr-2"></div>
            <span>AI Model Status: ${status.aiModelStatus || 'Unknown'}</span>
        </div>
    `;
}

// Function to populate AI Insights data
function populateAIInsights() {
    const aiInsightsOutput = document.getElementById('aiInsightsOutput');
    const insights = mockData.aiInsights;

    if (insights && insights.keyThemes && insights.keyThemes.length > 0) {
         aiInsightsOutput.innerHTML = `
            <p><strong>Sentiment:</strong> ${insights.sentiment || 'N/A'}</p>
            <p class="mt-1"><strong>Recommended Focus:</strong> ${insights.recommendedFocus || 'N/A'}</p>
            <p class="mt-2"><strong>Key Themes:</strong></p>
            <ul class="list-disc pl-5 mt-1">
                ${insights.keyThemes.map(theme => `<li>${theme}</li>`).join('')}
            </ul>
        `;
    } else {
         aiInsightsOutput.innerHTML = '<p class="italic text-gray-400">Upload a document or select a deficiency to see AI analysis.</p>';
    }
}

// Function to populate AI Recommendations
function populateAIRemendations() {
    const recommendationsOutput = document.getElementById('recommendationsOutput');
    if (mockData.aiRecommendations && mockData.aiRecommendations.length > 0) {
        let recommendationsHtml = '<p><strong>AI Recommendations:</strong></p><ul class="list-disc pl-5 mt-1">'; // Added title
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
        chartData.labels = [...months, 'Jul 26', 'Aug 26']; // Assuming 2 months of prediction

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
    // Get unique squadrons from deficiencies and add 'All' option
    const squadrons = ['All', ...new Set(mockData.deficiencies.map(def => def.squadron))];
    squadrons.sort(); // Sort squadrons alphabetically (keeping 'All' first if it exists)

    squadronFilterSelect.innerHTML = ''; // Clear existing options

    squadrons.forEach(squadron => {
        const option = document.createElement('option');
        option.value = squadron === 'All' ? 'all' : squadron.toLowerCase().replace(/\s+/g, ''); // 'all' value for All
        option.textContent = squadron === 'All' ? 'All Squadrons' : squadron;
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
        // Simulate report summarization
        const aiInsightsOutput = document.getElementById('aiInsightsOutput');
        aiInsightsOutput.innerHTML = '<p class="italic text-gray-400">Summarizing report...</p>';
        setTimeout(() => {
             // For simulation, let's just display the key themes from mockData.aiInsights
             let summaryHtml = '<p><strong>Simulated Report Summary:</strong></p><ul class="list-disc pl-5 mt-1">';
             if (mockData.aiInsights && mockData.aiInsights.keyThemes && mockData.aiInsights.keyThemes.length > 0) {
                 mockData.aiInsights.keyThemes.forEach(theme => {
                     summaryHtml += `<li>${theme}</li>`;
                 });
                 summaryHtml += '</ul>';
                 aiInsightsOutput.innerHTML = summaryHtml;
             } else {
                 aiInsightsOutput.innerHTML = '<p class="italic text-gray-400">Could not generate summary (no key themes in mock data).</p>';
             }
             alert('Report summarized (using mock data key themes).'); // Using alert for simulation
        }, 1500); // Simulate a delay
    });

    // Generate IG Talking Points Button
    document.getElementById('generateTalkingPoints').addEventListener('click', function() {
         // Simulate AI generation
        const aiInsightsOutput = document.getElementById('aiInsightsOutput');
        aiInsightsOutput.innerHTML = '<p class="italic text-gray-400">Generating talking points...</p>';
        setTimeout(() => {
            let tpHtml = '<p><strong>IG Talking Points:</strong></p><ul class="list-disc pl-5 mt-1">';
            if (mockData.talkingPoints && mockData.talkingPoints.length > 0) {
                 mockData.talkingPoints.forEach(point => {
                    tpHtml += `<li>${point}</li>`;
                });
                tpHtml += '</ul>';
                aiInsightsOutput.innerHTML = tpHtml;
            } else {
                 aiInsightsOutput.innerHTML = '<p class="italic text-gray-400">No talking points generated.</p>';
            }

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
