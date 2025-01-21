import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Combobox} from "@/ComboBox.tsx";


function VehicleForm() {
    return (
        <form className="space-y-4 max-w-md mx-auto m-8 ...">


            <div className=' flex justify-between'>
                <Label htmlFor="veh-plateNumber">Plate Number</Label>
                <Label htmlFor="veh-category">Category</Label>
            </div>
            <div className=" flex justify-between">

                <Input id='veh-plateNumber' className="mr-3" name="name" type="text" placeholder="Enter plate number" required/>
                <Input  id='veh-category' className="mr-3" name="name" type="text" placeholder="Enter the category" required/>

            </div>

            <div className=' flex justify-between'>
                <Label htmlFor="veh-status">Status</Label>
                <Label htmlFor="veh-fuelType">Fuel Type</Label>
            </div>
            <div className=" flex justify-between">

                <Combobox></Combobox>
                <Combobox></Combobox>

            </div>


            <div className="space-y-2">
                <Label htmlFor="veh-remarks">Remarks</Label>
                <Input id="veh-remarks" name="password" type="password" placeholder="Enter the remarks" required/>
            </div>

            <div className="space-y-2 ">
                <Label htmlFor="veh-staffIds">Staff Ids</Label>
            </div>

            <div className=" flex justify-between">
                <Input className="mr-4" id="veh-staffIds" name="staffIds" type="password" placeholder="Enter the remarks" required/>
                <Button type="submit" className="w-[28%] ">Add</Button>
            </div>


            {/* Submit Button */}
            <Button type="submit" className="w-full ">Submit</Button>
        </form>
    )
}

export default VehicleForm;