export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white text-center p-4">
            <p>&copy; 2024 Shrek Time Converter</p>
            <div className="flex justify-start space-x-4">
                <a href="https://www.paypal.com/donate/?hosted_button_id=QCCE664UPYGJC" className="text-blue-300 hover:underline">Donate</a>
            </div>
            <div className="flex justify-end space-x-4">
                <a href="https://github.com/pyeom" className="text-blue-300 hover:underline">GitHub</a>
            </div>
        </footer>
    );
}