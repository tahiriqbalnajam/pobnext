
import "../assets/css/bootstrap.min.css"
import "../assets/css/fontawesome.min.css"
import "../assets/css/flaticon.min.css"
import "../assets/css/nice-select.min.css"
import "../assets/css/magnific.min.css"
import "../assets/css/spacing.min.css"
import "../assets/css/slick.min.css"
import "../assets/css/style.css"
import Footer from '@/components/Footer.js'

export default function DashboardLayout({ children }) {
    return <body className=''>{children}<Footer /></body>;
}