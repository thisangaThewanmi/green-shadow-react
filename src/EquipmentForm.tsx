import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Combobox} from "@/ComboBox.tsx";


function EquipmentForm() {
    return (
        <form className="space-y-4 max-w-md mx-auto m-8 ...">


            <div className='space-y-2'>
                <Label htmlFor="equ-name">Equipment Name</Label>
                <Input id='equ-name' className="mr-3" name="name" type="text" placeholder="Enter the equipment name" required/>


            </div>
            <div className=" flex justify-between">
                <Label htmlFor="equ-status">Status</Label>
                <Combobox></Combobox>

            </div>

            <div className=' flex justify-between'>
                <Label htmlFor="equ-feildId">Field Id</Label>
                <Combobox ></Combobox>
            </div>
            <div className=" flex justify-between">

                <Label htmlFor="equ-staffId">Staff Id</Label>
                <Combobox></Combobox>

            </div>


            <div className="space-y-2 ">



                <Label htmlFor="equ-type"> Equipment Type</Label>
                <Input  id='equ-type' className="mr-3" name="name" type="text" placeholder="Enter the equipment type" required/>

            </div>


            {/* Submit Button */}
            <Button type="submit" className="w-full ">Submit</Button>
        </form>
    )
}

export default EquipmentForm;