import DonationForm from "./DonationForm"

const DonationBody = () => {
  return (
    <div className="donation-body">
              <div className="inner-row">
                          <div className="donation-body-content">
                                     <h3>Through your generosity, lives are touched, souls are uplifted, and communities are restored. Every contribution, big or small, brings hope, provides essential resources, and creates opportunities for those in need. Be part of this great mission to make a difference for God’s glory—your support can spark a lasting impact and build a brighter future.</h3>

                                     <DonationForm />
                          </div>
              </div>
    </div>
  )
}

export default DonationBody