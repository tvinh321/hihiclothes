import React from "react";

import AdminSelection from "../../components/admin-selection/AdminSelection";
import AdminHeader from "../../components/admin-header/AdminHeader";

import { firestore } from "../../firebase/firebase.utils";
import { Redirect, useParams } from 'react-router-dom';
import { BackspaceIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

const AdminItemEdit = () => {
    const [items, setItems] = React.useState([]);
    const [name, setName] = React.useState([]);
    const { id } = useParams();
    
    React.useEffect(() => {
        const getItems = async () => {
            const items = await firestore.collection("items").doc(id).get();

            setItems(()=>{
                const data = items.data();
                return {
                    id: items.id,
                    ...data,
                    // image: data.images[Object.keys(data.images)[0]][0]
                }
            });
        }

        getItems();
    }, []);

    const updateItem = () => {
        console.log(document.getElementById('name'))
        // if (nameval != undefined){
        //     firestore.collection("items").doc(id).update({
        //         name: document.getElementById("name").value
        //     });
        // }
        // Redirect("admin/items");
    }

    return (
        <div className="bg-gray-100">
            <AdminHeader />
            <div className="grid grid-cols-4 gap-10 mx-10 py-10">
                <AdminSelection />
                <form onSubmit={} className="w-full max-w-lg">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Name
                            </label>
                            <input onChange={()=>handleChange(name)} value={items.name} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="Jane"/>  
                        </div>
                    </div>
                    <button>Update</button>
                </form>
            </div>
        </div>
    );
}

export default AdminItemEdit;