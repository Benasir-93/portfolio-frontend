import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ThankYouModal from './components/ThankYouModal';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BackToTop from './components/BackToTop';
// import Whatsapp from './components/Whatsapp';



function Contact() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      message: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      name: Yup.string().required('Required'),
      message: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      let toastId;

      try {
         // Display a notification while the form is being submitted
         toastId =  toast.info('Sending your message...', { autoClose: false });

        // const response = await Axios.post('http://localhost:8080/api/userDetail', values);
        const response = await Axios.post('https://portfolio-backend-lc2g.onrender.com/api/userDetail', values);


        console.log('Response from server:', response.data);
        
    // Close the sending notification
    toast.dismiss(toastId);
          // Show the thank you modal on successful form submission
          setShowModal(true);

          // Reset the form fields
          formik.resetForm();
      } catch (error) {
        console.error('Error submitting form:', error);
         // Close the notification on form submission failure
         toast.error('Failed to send message. Please try again.')
      }
    },
  });
  
  const handleCloseModal = () => {
    // Hide the modal and reset the form fields when the modal is closed
    setShowModal(false);
    formik.resetForm();
  };
  const handleHomeRedirect = () => {
    // Redirect to the home page
    navigate('/');
    handleCloseModal();
  };

  return (
<>
  <Navbar />
    <div className="col-md-6 mx-auto shadow-lg mt-sm-5 p-5">
      <form onSubmit={formik.handleSubmit}>
        <h2 className='fw-bold text-center'>Let's Connect</h2>
        <p>Interested in working with me? Submit your project inquiry using the form</p>

        <div className="mb-3">
          <label htmlFor="name" className="form-label fw-bold">
            Name
          </label>
          <input
            type="text"
            className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
            id="name"
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="invalid-feedback">{formik.errors.name}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-bold">
            Email
          </label>
          <input
            type="email"
            className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
            id="email"
            aria-describedby="emailHelp"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="invalid-feedback">{formik.errors.email}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="3"
            className={`form-control ${formik.touched.message && formik.errors.message ? 'is-invalid' : ''}`}
            {...formik.getFieldProps('message')}
          ></textarea>
          {formik.touched.message && formik.errors.message && (
            <div className="invalid-feedback">{formik.errors.message}</div>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-dark btn-sm mx-auto d-flex justify-content-center align-items-center fw-bold"
        >
          Send Message
        </button>
      </form>
    </div>
  {/* </div> */}
  
      {/* Thank You Modal */}
      <ThankYouModal show={showModal} onClose={handleCloseModal} onHome={handleHomeRedirect} />
{/* <Whastapp/> */}
  <BackToTop/>
  <Footer />
</>

  );
}

export default Contact;
