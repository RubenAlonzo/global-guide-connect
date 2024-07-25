import React, { useState, useEffect, useRef } from 'react'; // Agrega useEffect aquí
import Header from '../components/Header';
import Select from 'react-select';
import './FormPlaces.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function FormPlaces() {
  const [placeData, setPlaceData] = useState({
    name: '',
    location: { label: 'Dominican Republic', value: 'DO' },
    description: '',
    experience: '',
    faqs: [],
    pictures: [],
  });

  const [imagePreviews, setImagePreviews] = useState([]);
  const [countryOptions, setCountryOptions] = useState([]);
  const [files, setFiles] = useState([]);
  const [fileList, setFileList] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => {
        const options = data.map(country => ({
          label: country.name.common,
          value: country.cca2
        }));
        setCountryOptions(options);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlaceData({ ...placeData, [name]: value });
  };

  const handleLocationChange = (selectedOption) => {
    setPlaceData({ ...placeData, location: selectedOption });
  };

  const handleFaqChange = (index, e) => {
    const { name, value } = e.target;
    const newFaqs = [...placeData.faqs];
    newFaqs[index] = { ...newFaqs[index], [name]: value };
    setPlaceData({ ...placeData, faqs: newFaqs });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newPreviews = files.map(file => URL.createObjectURL(file));
    
    setPlaceData({
      ...placeData,
      pictures: [...placeData.pictures, ...files],
    });

    setImagePreviews(prevPreviews => [...prevPreviews, ...newPreviews]);
    setFileList(files);
  };

  const handleAddFaq = () => {
    setPlaceData({
      ...placeData,
      faqs: [...placeData.faqs, { question: '', answer: '' }],
    });
  };

  const handleRemoveFaq = (index) => {
    const newFaqs = placeData.faqs.filter((_, i) => i !== index);
    setPlaceData({ ...placeData, faqs: newFaqs });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(placeData);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('Files', files[i]);
    }

    try {
      const response = await fetch('YOUR_UPLOAD_ENDPOINT', { 
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setFiles([]);
        setImagePreviews([]);
        setFileList([]);
      } else {
        console.error('Upload failed');
      }
    } catch (error) {
      console.error('Upload error:', error);
    }
  };

  const handleCancel = () => {
    setFiles([]);
    setImagePreviews([]);
    setFileList([]);
  };

  const handleRemoveFile = (idx) => {
    const newFiles = fileList.filter((_, index) => index !== idx);
    setFileList(newFiles);
    setFiles(newFiles);
  };

  return (
    <div>
      <Header />
      <section className="form-places-section py-5">
        <div className="container">
          <h2 className="mb-4">Add Place</h2>
          <form onSubmit={handleSubmit} className="form-places">
            <div className="row mb-4">
              <div className="col-md-6">
                <div className="form-section p-3 bg-light rounded">
                  <h3 className="mb-3">General Details</h3>
                  <div className="form-group mb-3">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={placeData.name}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="location">Location</label>
                    <Select
                      id="location"
                      name="location"
                      value={placeData.location}
                      onChange={handleLocationChange}
                      options={countryOptions}
                      className="react-select"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="description">About</label>
                    <textarea
                      id="description"
                      name="description"
                      value={placeData.description}
                      onChange={handleChange}
                      className="form-control"
                      rows="4"
                    ></textarea>
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="experience">What you will experience</label>
                    <textarea
                      id="experience"
                      name="experience"
                      value={placeData.experience}
                      onChange={handleChange}
                      className="form-control"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-section p-3 bg-light rounded">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3>Frequently Asked Questions</h3>
                    <button
                      type="button"
                      className="btn btn-secondary add-faq-button"
                      onClick={handleAddFaq}
                    >
                      Add
                    </button>
                  </div>
                  {placeData.faqs.map((faq, index) => (
                    <div className="faq-item mb-3" key={index}>
                      <div className="form-group">
                        <label htmlFor={`faq_question_${index}`}>Question</label>
                        <input
                          type="text"
                          id={`faq_question_${index}`}
                          name="question"
                          value={faq.question}
                          onChange={(e) => handleFaqChange(index, e)}
                          className="form-control mb-2"
                        />
                        <label htmlFor={`faq_answer_${index}`}>Answer</label>
                        <textarea
                          id={`faq_answer_${index}`}
                          name="answer"
                          value={faq.answer}
                          onChange={(e) => handleFaqChange(index, e)}
                          className="form-control"
                          rows="3"
                        ></textarea>
                      </div>
                      <div className="faq-actions d-flex justify-content-end mt-2">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary me-2"
                          title="Edit"
                        >
                          Edit
                          {/* <i className="fas fa-pen"></i> */}
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => handleRemoveFaq(index)}
                          title="Delete"
                        >
                         Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="form-section pictures p-3 bg-light rounded mb-4">
              <h3>Pictures</h3>
              <div 
                className="image-uploads dropzone"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <input 
                  type="file"
                  multiple
                  onChange={handleImageUpload}
                  hidden
                  accept="image/png, image/jpeg"
                  ref={inputRef}
                />
                <button 
                  type="button" 
                  onClick={() => inputRef.current.click()} 
                  className="btn btn-primary d-block mx-auto mb-3"
                >
                  Select Files
                </button>

                {fileList.length > 0 && (
                  <div className="uploads mt-3">
                    <ul className="list-group mb-3">
                      {fileList.map((file, idx) => (
                        <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
                          {file.name}
                          <button 
                            type="button" 
                            className="btn btn-sm btn-danger"
                            onClick={() => handleRemoveFile(idx)}
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </li>
                      ))}
                    </ul>
                    <div className="actions d-flex justify-content-end">
                      <button onClick={handleCancel} className="btn btn-secondary me-2">Cancel</button>
                      <button onClick={handleUpload} className="btn btn-primary">Upload</button>
                    </div>
                  </div>
                )}
              </div>

              <div className="image-previews row mt-3">
                {imagePreviews.map((preview, index) => (
                  <div className="col-md-4 mb-3" key={index}>
                    <div className="image-preview border rounded p-2 shadow-sm">
                      <img 
                        src={preview} 
                        alt={`preview ${index}`} 
                        className="img-fluid rounded"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="form-buttons text-center">
            <button type="button" className="btn btn-outline-secondary me-2">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
          
          </form>
        </div>
      </section>
    </div>
  );
}

export default FormPlaces;
