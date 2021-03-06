const tests=[{
    "RBC Count":{
        "min":4.32,
        "max":5.72,
        "unit":"million cells/mcL"
    },
    "WBC Count":{
        "max":3500,
        "min":10500,
        "unit":"cells/mcL"
    },
    "Urine Test":{
        "max":8.5,
        "min":5,
        "unit":"pH"
    },
    "BP Test":{
        "max":80,
        "min":130,
        "unit":"mm Hg P"
    },
  
    "Cardiac Output":{
        "max":8,
        "min":4,
        "unit":"L/min"
    },
    "Stroke Volume":{
        "max":100,
        "min":50,
        "unit":"mL"
    },
    "Heart Rate":{
        "max":100,
        "min":60,
        "unit":"bpm"
    },
    "Spirometry":{
        "max":120,
        "min":80,
        "unit":"%"
    },
    "Pulse Oximetry":{
        "max":1000000,
        "min":90,
        "unit":"bpm"
    },
    "Glucose Test":{
        "max":99,
        "min":70,
        "unit":"mg/dL"
    },
    "Potassium Test":{
        "max":5.1,
        "min":3.5,
        "unit":"mEq/L"
    },
    "Erythrocyte Sedimentation Rate (ESR)":{
        "max":22,
        "min":0,
        "unit":"mm/hr"
    },
    "Creatinine Test":{
        "max":1.3,
        "min":0.9,
        "unit":"mg/dL"
    },
    "Haemoglobin Count":{
        "max":17.5,
        "min":13.5,
        "unit":"g/dL"
    },
    "Platelets Count":{
        "min":150000,
        "max":450000,
        "unit":"/mcL"
    },
    "Hematocrit Test":{
        "max":50,
        "min":38.8,
        "unit":"%"
    },
    "Lipid Profile HDL":{
        "max":60,
        "min":40,
        "unit":"mg/dL"
    },
    "Lipid Profile LDL":{
        "max":160,
        "min":100,
        "unit":"mg/dL"
    },
    "Sugar Test":{
        "max":125,
        "min":0,
        "unit":"mg/dL"
    },
}]

/**
 * Replace all urine tests to Urine PH
 * Replace CRP RBC Count to RBC Count
 * Replace Glucose and potassium to different tests
 * Replace Complete Blood Count
 * Remove Blood Coagulatoin
 */