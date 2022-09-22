import create from "zustand";

const useStore = create((set) => ({
  user_location: window.sessionStorage.getItem("adress"),
  Login: true,
  LogOut: false,
  setloginfalse: () => set((state) => ({ Login: !state.Login })),
  setlogoutfalse: () => set((state) => ({ LogOut: !state.LogOut })),
  test: () => {
    console.log("test com");
  },
  pulltest: 0,
}));

// 불러올때
// const {count} = useStore();
// {count}
// let now = new Date();
// let year = now.getFullYear();
// let todayMonth = now.getMonth() + 1;
// let todayDate = now.getDate();

export default useStore;
