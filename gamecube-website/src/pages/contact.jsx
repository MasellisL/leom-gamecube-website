import "./contact.css"

export default function Contact() {
    return(
    <main className="Contact-page">
      <div className="contact-boxes-container">
        <div className="contact-box">
          <div className="name-title">
            <p>Leo Masellis</p>
          </div>
          <div className="contact-info">
            <p>Number: (209) 652-2218</p>
            <p>Email: leomasellis@gmail.com</p>
          </div>
        </div>

        <div className="contact-box">
          <div className="name-title">
            <p>Chad Peters</p>
          </div>
          <div className="contact-info">
            <p>Number: (209) 000-0000</p>
            <p>Email: --------@gmail.com</p>
          </div>
        </div>
      </div>
    </main>        
    )
}