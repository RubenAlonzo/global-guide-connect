import React, { useState, useRef } from 'react'; // Agrega useEffect aquí
import Header from '../components/Header';
import './FormPlaces.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProfileForm() {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    location: { label: 'Dominican Republic', value: 'DO' },
    languages: '',
    about: '',
    experience: '',
    faqs: [{ question: '', answer: '' }],
    pictures: [],
  });

  const [imagePreviews, setImagePreviews] = useState([]);
  const [ setFiles] = useState([]);
  const [ setFileList] = useState([]);
  const inputRef = useRef(null);

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };



  const handleFaqChange = (index, e) => {
    const { name, value } = e.target;
    const newFaqs = [...profileData.faqs];
    newFaqs[index] = { ...newFaqs[index], [name]: value };
    setProfileData({ ...profileData, faqs: newFaqs });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newPreviews = files.map(file => URL.createObjectURL(file));
    
    setProfileData({
      ...profileData,
      pictures: [...profileData.pictures, ...files],
    });

    setImagePreviews(prevPreviews => [...prevPreviews, ...newPreviews]);
    setFileList(files);
  };

  const handleAddFaq = () => {
    setProfileData({
      ...profileData,
      faqs: [...profileData.faqs, { question: '', answer: '' }],
    });
  };

  const handleRemoveFaq = (index) => {
    const newFaqs = profileData.faqs.filter((_, i) => i !== index);
    setProfileData({ ...profileData, faqs: newFaqs });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(profileData);
  };

 
  


 


  const handleCancelar = () => {
    setFiles([]);
    setImagePreviews([]);
  };



  return (
    <div>
      <Header />
      <section className="profile-form-section py-5">
        <div className="container">
          <h2 className="mb-4">Profile</h2>
          <form onSubmit={handleSubmit} className="profile-form">
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
                      value={profileData.name}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                
                  <div className="form-group mb-3">
                    <label htmlFor="languages">Languages</label>
                    <input
                      type="text"
                      id="languages"
                      name="languages"
                      value={profileData.languages}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="about">About</label>
                    <textarea
                      id="about"
                      name="about"
                      value={profileData.about}
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
                      value={profileData.experience}
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
                  {profileData.faqs.map((faq, index) => (
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
              <h3>Picture</h3>
              <div className="image-uploads dropzone">
                <input 
                  type="file"
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
                  Select File
                </button>

                {imagePreviews && (
                  <div className="uploads mt-3">
                    <div className="image-preview border rounded p-2 shadow-sm mb-2">
                      <img 
                        src={imagePreviews} 
                        alt="preview" 
                        className="img-fluid rounded"
                      />
                    </div>
                    <div className="actions d-flex justify-content-end">
                      <button onClick={handleCancelar} className="btn btn-secondary me-2">Cancel</button>
                      <button onClick={handleSubmit} className="btn btn-primary">Upload</button>
                    </div>
                  </div>
                )}
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

export default ProfileForm;
