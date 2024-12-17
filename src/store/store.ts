import { create } from "zustand"
import { devtools } from "zustand/middleware"

type GymState={

}

export const useGymStore=create<GymState>()(
	devtools(
		
	)
)