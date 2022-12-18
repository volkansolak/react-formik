import { useFormik } from 'formik'
import validationSchema from "../commons/validations";

function Signup() {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } = 
    useFormik({
      initialValues: {
        email: "",
        password: "",
        passwordConfirm: ""
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema
    });

  return (
    <div>
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label  className="form-label">Email address</label>
            <input 
              type="email" 
              className="form-control" 
              id="exampleFormControlInput1" 
              placeholder="name@example.com"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur} />
          </div>
          <div className="mb-3" style={{"color": "red"}}>
          <h6>{ errors.email && touched.email && errors.email}</h6>
          </div>
          <div className="mb-3">
            <label  className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="exampleFormControlInput2" 
              placeholder="*******" 
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              />
          </div>
          <div className="mb-3" style={{"color": "red"}}>
            <h6>{ errors.password && touched.password && errors.password}</h6>
          </div>
          <div className="mb-3">
            <label className="form-label">Password Confirm</label>
            <input 
              type="password" 
              className="form-control" 
              id="exampleFormControlInput3" 
              placeholder="*******"
              name="passwordConfirm"
              value={values.passwordConfirm}
              onChange={handleChange}
              onBlur={handleBlur} />
          </div>
          <div className="mb-3" style={{"color": "red"}}>
            <h6>{ errors.passwordConfirm && touched.passwordConfirm && errors.passwordConfirm}</h6>
          </div>
          <div className="mb-3">
            <button className="btn btn-primary" type="submit">Create User</button>
          </div>
        </form>
      </header>
    </div>
  )
}

export default Signup
