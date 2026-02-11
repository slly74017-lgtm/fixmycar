import React, { useState } from "react";

export default function App() {
  const [symptom, setSymptom] = useState("");
  const [result, setResult] = useState("");

  const diagnose = () => {
    if (symptom === "הרכב לא מניע") {
      setResult("ייתכן שהמצבר חלש או שהסטרטר תקול.");
    } else if (symptom === "נורית מנוע דולקת") {
      setResult("ייתכן חיישן תקול או בעיית הצתה.");
    } else if (symptom === "הרכב מתחמם") {
      setResult("ייתכן חוסר בנוזל קירור או בעיה ברדיאטור.");
    } else {
      setResult("לא נמצאה אבחנה. מומלץ בדיקה במוסך.");
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>FixMyCar 🚗</h1>
      <h2>אבחון תקלות רכב</h2>

      <select
        value={symptom}
        onChange={(e) => setSymptom(e.target.value)}
      >
        <option value="">בחרי תסמין</option>
        <option value="הרכב לא מניע">הרכב לא מניע</option>
        <option value="נורית מנוע דולקת">נורית מנוע דולקת</option>
        <option value="הרכב מתחמם">הרכב מתחמם</option>
      </select>

      <br /><br />

      <button onClick={diagnose}>אבחני תקלה</button>

      {result && (
        <p style={{ marginTop: 20 }}>
          תוצאה: {result}
        </p>
      )}
    </div>
  );
}
