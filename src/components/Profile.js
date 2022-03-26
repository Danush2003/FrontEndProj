function Profile() {
  return (
    <div className="container">
      <h2>Hello, James</h2>
      <div className="row">
        <div className="col-sm-6">
          <img
            className="image2"
            src="data:image/jpeg;base64,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"
          ></img>
        </div>
        <div className="mt-5 col-sm-6">
          <ul className="m-auto">
            <h2 className="Personal">Personal Details</h2>
            <div className="m-auto p-3">
              <li>Name:James Stark</li>
              <li>Email:james@gmail.com</li>
              <li>Mobile:1234567890</li>
            </div>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <ul>
            <h3>Previous Orders</h3>
            <li>Mens T-Shirt(delivered on 21-03-2022)</li>
            <li>batman Hoodie(delivered on 23-01-2021)</li>
            <li>
              <button className="btn btn-info">See More</button>
            </li>
          </ul>
        </div>
        <div className="col-sm-4">
          <h3>Saved Address</h3>
          <ul>
            <li>Home(2-2-1187/86,Vidyanager,Hyderabad)</li>
            <li>Office(james towers,Hyderabad)</li>
            <li>
              <button className="btn btn-info">Add Address</button>
            </li>
          </ul>
        </div>
        <div className="col-sm-4">
          <h3>Saved Payments</h3>
          <ul>
            <li>SBI Master Card</li>

            <li>Bank of Baroda Debit card</li>
            <li>Indian bank UPI</li>
            <li>
              <button className="btn btn-info">Manage payments</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Profile;
