import { type UserStore } from "$lib/types/user";
import { writable } from "svelte/store";

export const userStore = writable<UserStore>({
  user: null,
  token: null,
})