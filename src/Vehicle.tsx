import Navigation from "@/components/ui/Navigation.tsx";
import Header from "@/Header.tsx";
import Form from "@/Form1.tsx";
import './Dashboard.css';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table.tsx";

const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
];

function Vehicle(){
    return(
        <div className="h-screen flex full-page-container ">
            {/* Dashboard Section */}
            <div className="w-1/6 bg-gray-200">
                <Navigation/>
            </div>

            {/* Right Section with Header and Main */}
            <div className="flex-1 flex flex-col overflow-y-auto ">
                {/* Header Section */}
                <div className="h-15 bg-gray-300 ml-3 mr-4  mt-5 rounded-2xl">
                    <Header/>
                </div>


                    <main className="flex-1 p-4 space-y-4 w-full">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div className="aspect-video rounded-xl bg-gray-200"><Form/></div>
                            <div className="aspect-video rounded-xl bg-gray-200">
                                <Table>
                                    <TableCaption>A list of your recent invoices.</TableCaption>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[100px]">Invoice</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead>Method</TableHead>
                                            <TableHead className="text-right">Amount</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {invoices.map((invoice) => (
                                            <TableRow key={invoice.invoice}>
                                                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                                                <TableCell>{invoice.paymentStatus}</TableCell>
                                                <TableCell>{invoice.paymentMethod}</TableCell>
                                                <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                    <TableFooter>
                                        <TableRow>
                                            <TableCell colSpan={3}>Total</TableCell>
                                            <TableCell className="text-right">$2,500.00</TableCell>
                                        </TableRow>
                                    </TableFooter>
                                </Table>
                            </div>
                        </div>
                        {/*<div className="min-h-[100vh] rounded-xl bg-gray-200">*/}
                        {/*   */}
                        {/*</div>*/}

                    </main>

                </div>
            </div>
            )
            }

            export default Vehicle;