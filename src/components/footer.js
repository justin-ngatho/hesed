
export default function Footer() {

    var today = new Date();

    return (
      <footer className="container-footer">
        <div className="row justify-content-center mt-3 mb-4">
          <div className="col-8">
            <p>Rose Avenue, Kilimani, Opposite Avenue 5 Park, 
                Suite R10 | Phone: +254 202010968/ +254 795724813 | Email: info@hesedafrica.org</p>
                <br/>
            <p>Copyright <i class="bi bi-c-circle"></i> {today.getFullYear()} Hesed Africa Foundation</p>
          </div>
        </div>
      </footer>
    );
}