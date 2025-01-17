
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

function Staff() {
        return (
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>John Doe</TableCell>
                            <TableCell>john@example.com</TableCell>
                            <TableCell>Admin</TableCell>
                            <TableCell>
                                <button className="text-blue-500 hover:underline">Edit</button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Jane Smith</TableCell>
                            <TableCell>jane@example.com</TableCell>
                            <TableCell>Editor</TableCell>
                            <TableCell>
                                <button className="text-blue-500 hover:underline">Edit</button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        );
    }



export default Staff;