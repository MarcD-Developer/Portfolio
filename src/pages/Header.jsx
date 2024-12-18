const Header = () => {
    return (
        <header class="bg-gray-900">
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1">
            <a href="#">
                <span class="sr-only">My Name</span>
                Marc Angelo Dilinila
            </a>
            </div>
            <div class="flex lg:hidden">
            <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400">
                <span class="sr-only">Open main menu</span>
                <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
            </div>
            <div class="hidden lg:flex lg:gap-x-12">
            <a href="#" class="text-sm/6 font-semibold text-white">About</a>
            <a href="#" class="text-sm/6 font-semibold text-white">Projects</a>
            </div>
        </nav>
        {/* Mobile menu, show/hide based on menu open state. --> */}
        <div class="lg:hidden" role="dialog" aria-modal="true">
            {/* Background backdrop, show/hide based on slide-over state. */}
            <div class="fixed inset-0 z-10"></div>
            <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div class="flex items-center justify-between">
                <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
                <img class="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500" alt=""/>
                </a>
                <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-400">
                <span class="sr-only">Close menu</span>
                <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                </button>
            </div>
            <div class="mt-6 flow-root">
                <div class="-my-6 divide-y divide-gray-500/25">
                <div class="space-y-2 py-6">
                    <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-800">About</a>
                    <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-800">Projects</a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </header>
    );
};
        
export default Header;
        