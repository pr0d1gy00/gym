import { create } from "zustand"
import { devtools } from "zustand/middleware"

type GymState={
	showModal:()=>void
	modal:boolean
}

export const useGymStore=create<GymState>()(
	devtools((set)=>({
		modal:false,
			showModal:() =>set((state)=>({
				...state,
				modal:!state.modal
			}))
			}
		)
	)
)