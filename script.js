const foodDatabase = {
    vegetables: {
        broccoli: {
            cuts: { default: { weight: 150, description: 'Standard florets', modifier: 1.0 } },
            boiling: (t, mod) => Math.max(40, (100 - (t * 8)) * mod),
            steaming: (t, mod) => Math.max(70, (100 - (t * 4)) * mod),
            microwaving: (t, mod) => Math.max(75, (100 - (t * 3)) * mod),
            nutrients: [
                { name: 'Vitamin C', level: 'High', sensitivity: 'High' },
                { name: 'Vitamin K', level: 'High', sensitivity: 'Low' },
                { name: 'Folate', level: 'Medium', sensitivity: 'Medium' },
                { name: 'Sulforaphane', level: 'High', sensitivity: 'High' }
            ]
        },
        spinach: {
            cuts: { default: { weight: 100, description: 'Fresh leaves', modifier: 1.0 } },
            boiling: (t, mod) => Math.max(35, (100 - (t * 9)) * mod),
            steaming: (t, mod) => Math.max(65, (100 - (t * 4.5)) * mod),
            microwaving: (t, mod) => Math.max(70, (100 - (t * 3.5)) * mod),
            nutrients: [
                { name: 'Iron', level: 'High', sensitivity: 'Low' },
                { name: 'Vitamin A', level: 'High', sensitivity: 'Medium' },
                { name: 'Vitamin C', level: 'Medium', sensitivity: 'High' },
                { name: 'Folate', level: 'High', sensitivity: 'Medium' }
            ]
        },
        kale: {
            cuts: { default: { weight: 130, description: 'Chopped leaves', modifier: 1.0 } },
            boiling: (t, mod) => Math.max(38, (100 - (t * 8.5)) * mod),
            steaming: (t, mod) => Math.max(68, (100 - (t * 4.2)) * mod),
            microwaving: (t, mod) => Math.max(73, (100 - (t * 3.3)) * mod),
            nutrients: [
                { name: 'Vitamin K', level: 'Very High', sensitivity: 'Low' },
                { name: 'Vitamin C', level: 'High', sensitivity: 'High' },
                { name: 'Beta-Carotene', level: 'High', sensitivity: 'Medium' },
                { name: 'Calcium', level: 'Medium', sensitivity: 'Low' }
            ]
        },
        carrots: {
            cuts: { default: { weight: 120, description: 'Sliced rounds', modifier: 1.0 } },
            boiling: (t, mod) => Math.max(50, (100 - (t * 5)) * mod),
            steaming: (t, mod) => Math.max(75, (100 - (t * 3)) * mod),
            microwaving: (t, mod) => Math.max(80, (100 - (t * 2.2)) * mod),
            nutrients: [
                { name: 'Beta-Carotene', level: 'Very High', sensitivity: 'Low' },
                { name: 'Vitamin A', level: 'Very High', sensitivity: 'Low' },
                { name: 'Vitamin K', level: 'Medium', sensitivity: 'Low' },
                { name: 'Biotin', level: 'Medium', sensitivity: 'Medium' }
            ]
        }
    },
    fruits: {
        blueberries: {
            cuts: { default: { weight: 140, description: 'Whole berries', modifier: 1.0 } },
            boiling: (t, mod) => Math.max(45, (100 - (t * 7)) * mod),
            steaming: (t, mod) => Math.max(75, (100 - (t * 3.5)) * mod),
            microwaving: (t, mod) => Math.max(80, (100 - (t * 2.5)) * mod),
            nutrients: [
                { name: 'Anthocyanins', level: 'High', sensitivity: 'High' },
                { name: 'Vitamin C', level: 'Medium', sensitivity: 'High' },
                { name: 'Vitamin K', level: 'Medium', sensitivity: 'Low' },
                { name: 'Manganese', level: 'Medium', sensitivity: 'Low' }
            ],
            funNote: "Pro tip: Just eat them fresh! Who boils or steams blueberries anyway? Unless you're making jam, just... don't. Your antioxidants will thank you!"
        },
        tomatoes: {
            cuts: { default: { weight: 180, description: 'Quartered', modifier: 1.0 } },
            boiling: (t, mod) => Math.max(60, (100 - (t * 4)) * mod),
            steaming: (t, mod) => Math.max(80, (100 - (t * 2.5)) * mod),
            microwaving: (t, mod) => Math.max(85, (100 - (t * 1.8)) * mod),
            nutrients: [
                { name: 'Lycopene', level: 'High', sensitivity: 'Low' },
                { name: 'Vitamin C', level: 'Medium', sensitivity: 'High' },
                { name: 'Potassium', level: 'Medium', sensitivity: 'Low' },
                { name: 'Folate', level: 'Medium', sensitivity: 'Medium' }
            ],
            funNote: "Fun fact: Yes, it's a fruit! ^-^ Botanically speaking, tomatoes are fruits, but we treat them like vegetables in the kitchen. Science vs. culture strikes again!"
        }
    },
    meat: {
        'chicken-breast': {
            cuts: {
                'boneless-skinless': { weight: 170, description: 'Boneless, skinless, 2.5cm thick', modifier: 1.0 },
                'bone-in': { weight: 250, description: 'Bone-in, skin-on, 3cm thick', modifier: 0.92 },
                'cutlet': { weight: 120, description: 'Pounded thin, 1cm thick', modifier: 1.08 }
            },
            boiling: (t, mod) => Math.max(65, (100 - (t * 3.5)) * mod),
            steaming: (t, mod) => Math.max(75, (100 - (t * 2.8)) * mod),
            grilling: (t, mod) => Math.max(70, (100 - (t * 3.2)) * mod),
            baking: (t, mod) => Math.max(72, (100 - (t * 2.5)) * mod),
            nutrients: [
                { name: 'Protein', level: 'Very High', sensitivity: 'Medium' },
                { name: 'Vitamin B6', level: 'High', sensitivity: 'Medium' },
                { name: 'Niacin', level: 'High', sensitivity: 'Low' },
                { name: 'Selenium', level: 'Medium', sensitivity: 'Low' }
            ]
        },
        'beef-sirloin': {
            cuts: {
                'top-sirloin-steak': { weight: 225, description: 'Top sirloin, 2.5cm thick', modifier: 1.0 },
                'sirloin-tip': { weight: 200, description: 'Sirloin tip roast, 4cm thick', modifier: 0.88 },
                'thin-cut': { weight: 150, description: 'Thinly sliced, 1.5cm thick', modifier: 1.12 }
            },
            boiling: (t, mod) => Math.max(60, (100 - (t * 4)) * mod),
            steaming: (t, mod) => Math.max(70, (100 - (t * 3.3)) * mod),
            grilling: (t, mod) => Math.max(68, (100 - (t * 3.8)) * mod),
            baking: (t, mod) => Math.max(72, (100 - (t * 2.8)) * mod),
            nutrients: [
                { name: 'Protein', level: 'Very High', sensitivity: 'Medium' },
                { name: 'Iron', level: 'High', sensitivity: 'Low' },
                { name: 'Vitamin B12', level: 'Very High', sensitivity: 'Medium' },
                { name: 'Zinc', level: 'High', sensitivity: 'Low' }
            ]
        },
        'pork-chop': {
            cuts: {
                'bone-in-thick': { weight: 240, description: 'Bone-in center cut, 3cm thick', modifier: 0.9 },
                'boneless': { weight: 180, description: 'Boneless loin chop, 2cm thick', modifier: 1.0 },
                'thin-cut': { weight: 140, description: 'Thinly cut, 1.5cm thick', modifier: 1.1 }
            },
            boiling: (t, mod) => Math.max(62, (100 - (t * 3.8)) * mod),
            steaming: (t, mod) => Math.max(72, (100 - (t * 3)) * mod),
            grilling: (t, mod) => Math.max(69, (100 - (t * 3.5)) * mod),
            baking: (t, mod) => Math.max(74, (100 - (t * 2.6)) * mod),
            nutrients: [
                { name: 'Protein', level: 'Very High', sensitivity: 'Medium' },
                { name: 'Thiamine', level: 'Very High', sensitivity: 'High' },
                { name: 'Selenium', level: 'High', sensitivity: 'Low' },
                { name: 'Phosphorus', level: 'High', sensitivity: 'Low' }
            ]
        },
        'ground-beef': {
            cuts: {
                'patty-regular': { weight: 115, description: '80/20 lean, 2cm thick patty', modifier: 1.0 },
                'patty-lean': { weight: 115, description: '90/10 lean, 2cm thick patty', modifier: 1.05 },
                'loose': { weight: 100, description: 'Loose ground, crumbled', modifier: 0.95 }
            },
            boiling: (t, mod) => Math.max(58, (100 - (t * 4.2)) * mod),
            steaming: (t, mod) => Math.max(68, (100 - (t * 3.5)) * mod),
            grilling: (t, mod) => Math.max(65, (100 - (t * 4)) * mod),
            baking: (t, mod) => Math.max(70, (100 - (t * 3)) * mod),
            nutrients: [
                { name: 'Protein', level: 'High', sensitivity: 'Medium' },
                { name: 'Iron', level: 'High', sensitivity: 'Low' },
                { name: 'Vitamin B12', level: 'High', sensitivity: 'Medium' },
                { name: 'Zinc', level: 'High', sensitivity: 'Low' }
            ]
        }
    }
};

let lineChart = null;
let barChart = null;
let currentModifier = 1.0;

const categorySelect = document.getElementById('category-select');
const foodSelect = document.getElementById('food-select');
const cutSelect = document.getElementById('cut-select');
const methodSelect = document.getElementById('method-select');
const timeSlider = document.getElementById('time-slider');
const cutGroup = document.getElementById('cut-group');
const weightGroup = document.getElementById('weight-group');
const weightDisplay = document.getElementById('weight-display');
const thicknessDisplay = document.getElementById('thickness-display');
const timeValue = document.getElementById('time-value');
const retentionValue = document.getElementById('retention-value');
const retentionFill = document.getElementById('retention-fill');
const statusText = document.getElementById('status-text');
const tableBody = document.getElementById('table-body');

// Navigation
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPage = link.getAttribute('data-page');
        
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        pages.forEach(p => p.classList.remove('active'));
        document.getElementById(`${targetPage}-page`).classList.add('active');
    });
});

categorySelect.addEventListener('change', onCategoryChange);
foodSelect.addEventListener('change', onFoodChange);
cutSelect.addEventListener('change', onCutChange);
methodSelect.addEventListener('change', update);
timeSlider.addEventListener('input', update);

function onCategoryChange() {
    const category = categorySelect.value;
    const foods = foodDatabase[category];
    
    foodSelect.innerHTML = '';
    Object.keys(foods).forEach(key => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = key.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        foodSelect.appendChild(option);
    });

    updateMethodOptions(category);
    onFoodChange();
}

function updateMethodOptions(category) {
    methodSelect.innerHTML = '';
    
    if (category === 'meat') {
        const methods = ['boiling', 'steaming', 'grilling', 'baking'];
        
        methods.forEach(method => {
            const option = document.createElement('option');
            option.value = method;
            option.textContent = method.charAt(0).toUpperCase() + method.slice(1);
            methodSelect.appendChild(option);
        });
    } else {
        ['boiling', 'steaming', 'microwaving'].forEach(method => {
            const option = document.createElement('option');
            option.value = method;
            option.textContent = method.charAt(0).toUpperCase() + method.slice(1);
            methodSelect.appendChild(option);
        });
    }
}

function onFoodChange() {
    const category = categorySelect.value;
    const food = foodSelect.value;
    const foodData = foodDatabase[category][food];

    if (foodData.cuts && Object.keys(foodData.cuts).length > 1) {
        cutGroup.style.display = 'block';
        weightGroup.style.display = 'block';
        
        cutSelect.innerHTML = '';
        Object.keys(foodData.cuts).forEach(cutKey => {
            const option = document.createElement('option');
            option.value = cutKey;
            option.textContent = cutKey.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
            cutSelect.appendChild(option);
        });
        
        onCutChange();
    } else {
        cutGroup.style.display = 'none';
        weightGroup.style.display = 'none';
        currentModifier = 1.0;
    }

    update();
    displayFunNote();
}

function onCutChange() {
    const category = categorySelect.value;
    const food = foodSelect.value;
    const cut = cutSelect.value;
    const cutData = foodDatabase[category][food].cuts[cut];

    weightDisplay.textContent = cutData.weight + 'g';
    thicknessDisplay.textContent = cutData.description;
    currentModifier = cutData.modifier;

    update();
}

function displayFunNote() {
    const category = categorySelect.value;
    const food = foodSelect.value;
    const foodData = foodDatabase[category][food];
    
    const existingNote = document.querySelector('.fun-note');
    if (existingNote) {
        existingNote.remove();
    }
    
    if (foodData.funNote) {
        const controls = document.querySelector('.controls');
        const funNoteDiv = document.createElement('div');
        funNoteDiv.className = 'fun-note';
        funNoteDiv.innerHTML = `<p>${foodData.funNote}</p>`;
        controls.appendChild(funNoteDiv);
    }
}

function initCharts() {
    const lineCtx = document.getElementById('line-chart').getContext('2d');
    const barCtx = document.getElementById('bar-chart').getContext('2d');

    Chart.defaults.color = '#4a5568';
    Chart.defaults.borderColor = '#e8eef5';

    lineChart = new Chart(lineCtx, {
        type: 'line',
        data: {
            labels: Array.from({ length: 31 }, (_, i) => (i * 0.5).toFixed(1)),
            datasets: []
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        padding: 20,
                        color: '#27377f',
                        font: {
                            size: 13,
                            weight: '600'
                        }
                    }
                }
            },
            scales: {
                y: {
                    min: 0,
                    max: 100,
                    ticks: {
                        callback: (value) => value + '%',
                        color: '#4a5568',
                        font: {
                            size: 12
                        }
                    },
                    grid: {
                        color: '#e8eef5',
                        drawBorder: true
                    },
                    title: {
                        display: true,
                        text: 'Retention (%)',
                        color: '#27377f',
                        font: {
                            size: 13,
                            weight: '600'
                        }
                    }
                },
                x: {
                    grid: {
                        color: '#e8eef5',
                        drawBorder: true
                    },
                    ticks: {
                        color: '#4a5568',
                        font: {
                            size: 12
                        }
                    },
                    title: {
                        display: true,
                        text: 'Time (minutes)',
                        color: '#27377f',
                        font: {
                            size: 13,
                            weight: '600'
                        }
                    }
                }
            }
        }
    });

    barChart = new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: 'Retention',
                data: [],
                backgroundColor: 'rgba(39, 55, 127, 0.8)',
                borderColor: '#27377f',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    min: 0,
                    max: 100,
                    ticks: {
                        callback: (value) => value + '%',
                        color: '#4a5568'
                    },
                    grid: {
                        color: '#e8eef5'
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#4a5568'
                    }
                }
            }
        }
    });
}

function generateCurve(foodData, method) {
    return Array.from({ length: 31 }, (_, i) => {
        const time = i * 0.5;
        return foodData[method] ? foodData[method](time, currentModifier) : 0;
    });
}

function update() {
    const category = categorySelect.value;
    const food = foodSelect.value;
    const method = methodSelect.value;
    const time = parseFloat(timeSlider.value);
    const foodData = foodDatabase[category][food];

    timeValue.textContent = `${time.toFixed(1)} min`;

    const retention = foodData[method] ? foodData[method](time, currentModifier) : 0;
    updateRetention(retention);
    updateCharts(foodData, time);
    updateTable(foodData);
    updateStatus(retention, method, time);
}

function updateRetention(retention) {
    const rounded = Math.round(retention);
    retentionValue.textContent = `${rounded}%`;
    retentionFill.style.width = `${rounded}%`;

    retentionFill.classList.remove('medium', 'low');
    if (retention < 50) {
        retentionFill.classList.add('low');
    } else if (retention < 75) {
        retentionFill.classList.add('medium');
    }
}

function updateCharts(foodData, time) {
    const methods = Object.keys(foodData).filter(k => typeof foodData[k] === 'function');
    const colors = ['#3b82f6', '#35be82', '#f59e0b', '#8b5cf6'];
    
    lineChart.data.datasets = methods.map((method, i) => ({
        label: method.charAt(0).toUpperCase() + method.slice(1),
        data: generateCurve(foodData, method),
        borderColor: colors[i],
        backgroundColor: 'transparent',
        tension: 0.3,
        borderWidth: 3,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: colors[i],
        pointBorderColor: '#fff',
        pointBorderWidth: 2
    }));
    lineChart.update('none');

    barChart.data.labels = methods.map(m => m.charAt(0).toUpperCase() + m.slice(1));
    barChart.data.datasets[0].data = methods.map(m => foodData[m](time, currentModifier));
    barChart.data.datasets[0].backgroundColor = colors.slice(0, methods.length).map(c => c + 'CC');
    barChart.data.datasets[0].borderColor = colors.slice(0, methods.length);
    barChart.update('none');
}

function updateTable(foodData) {
    tableBody.innerHTML = foodData.nutrients.map(n => `
        <tr>
            <td>${n.name}</td>
            <td>${n.level}</td>
            <td>${n.sensitivity}</td>
        </tr>
    `).join('');
}

function updateStatus(retention, method, time) {
    let message = '';
    
    if (retention >= 85) {
        message = 'Optimal nutrient preservation';
    } else if (retention >= 70) {
        message = 'Good retention. Consider reducing time further';
    } else if (retention >= 50) {
        message = 'Moderate loss. Cooking time exceeds recommendation';
    } else {
        message = 'Significant degradation detected';
    }

    statusText.textContent = message;
}

document.addEventListener('DOMContentLoaded', () => {
    initCharts();
    onCategoryChange();
});