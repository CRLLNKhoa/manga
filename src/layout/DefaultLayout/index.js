import Header from '@/layout/Header';
import Footer from '../Footer';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
