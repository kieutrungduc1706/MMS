import React, { useRef, useState, useEffect } from "react";
import TopBar from "../../components/TopBar/Navbar";
import { useLocation } from "react-router-dom";
import '../Feedback/Feedback.css';
import listApi from "../../services/api";

const Feedback = () => {
  const location = useLocation();
  const [fileName, setFileName] = useState('');
  const [comment, setComment] = useState('');
  const [isPopupVisible, setPopupVisibility] = useState(false);
  const { session_id, user_fullname, user_type } = location.state || {}; // 


  const togglePopup = () => {
    setPopupVisibility(!isPopupVisible);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        setFileName(file.name);
      } else {
        setFileName('');
        alert('Vui lòng chọn một tệp ảnh.');
      }
    }
  };

  const SendRP = () => {
    const formData = new FormData();
    const attach = {
        "session_id": session_id,
        "comment": comment,
    };

    if (fileName !== null) {
        formData.append('file', fileName);
    } else {
        formData.append('file', ""); // You may choose to omit this if no file is provided.
    }
    
    formData.append("attach", JSON.stringify(attach));

    // console.log(attach); // This will log the attach object.

    fetch(listApi.feedback, {  // Corrected: URL should be the first parameter
        method: 'POST',
        body: formData,
        // Removed headers: Content-Type is set automatically
    })
    .then((response) => response.json())
    .then((response) => {
        if (response.code === 200) {  // Use `===` for strict comparison
            alert("Gửi phản ánh thành công");
            setPopupVisibility(false)
            setFileName('')
            setComment('')
        } else {
            alert("Gửi phản ánh thất bại");
        }
    })
    .catch((error) => {
        alert("Error: " + error.message);  // Show the error message
    });
};


  return (
    <div className="App">
      <div className="feedback" onClick={togglePopup}>
        <p>Feedback</p>
      </div>
      <div className={`popup ${isPopupVisible ? 'active' : ''}`}>
        <span className="close-btn" onClick={togglePopup}>&times;</span>
        <h2>Phản ảnh</h2>
        <textarea onChange={e => setComment(e.target.value)} rows="4" style={{ width: '100%', resize: 'none', outline: 'none', border: '1px solid gray', padding: '5px', marginTop: 10 }}></textarea>
        <input
          type="file"
          id="myFile"
          className="custom-file-input"
          name="filename"
          onChange={handleFileChange}
        />
        <label htmlFor="myFile" className="custom-file-label">
          Chọn ảnh
        </label>
        {fileName && <span className="file-name">{fileName}</span>}

        <button style={{ marginTop: '10px', padding: 3, textAlign: 'center' }} onClick={SendRP}>Gửi phản ánh</button>
      </div>
    </div>
  )
}


export default Feedback;