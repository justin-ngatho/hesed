
export default function Footer() {

    var today = new Date();

    return (
      <footer className="container-footer">
        <div className="row justify-content-center mt-3 mb-4">
          <div className="col-8">
            <p>Fatima Apartments, Arwing Kodhek off Marcus Garvey, Kilimani
               | Phone: +254 727098070 | Email: vorp.eafrica@gmail.com</p>
                <br/>
            <p>Copyright <i class="bi bi-c-circle"></i> {today.getFullYear()}  Voice of Reconciliation and Pacification</p>
          </div>
        </div>
      </footer>
    );
}