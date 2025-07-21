//@ts-nocheck


import { Button, DropdownMenu, Switch } from '@radix-ui/themes'
import Switch1 from './Switch1';
import SearchBar from './SearchBar';


export default function Header() {
    return (
        <div className='flex justify-between items-center gap-2 bg-sky-950 text-white p-2 h-[50px]'>
            <div className='flex flex-wrap gap-2'>

                <h2>TMDB</h2>
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                        <Button variant="soft" color="#D5E2FF">
                            Movies
                        </Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                        <DropdownMenu.Item >Popular</DropdownMenu.Item>
                        <DropdownMenu.Item >Now Playing</DropdownMenu.Item>
                        <DropdownMenu.Item >Upcoming</DropdownMenu.Item>
                        <DropdownMenu.Item>Top Rating</DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Root>

                <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                        <Button variant="soft">
                            TV Shows
                        </Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                        <DropdownMenu.Item >Popular</DropdownMenu.Item>
                        <DropdownMenu.Item >Airing Today</DropdownMenu.Item>
                        <DropdownMenu.Item >Upcoming</DropdownMenu.Item>
                        <DropdownMenu.Item>Top Rated</DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Root>

                <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                        <Button variant="soft">
                            People
                        </Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                        <DropdownMenu.Item >Popular People</DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Root>

                <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                        <Button variant="soft">
                            More
                        </Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                        <DropdownMenu.Item >Discussions</DropdownMenu.Item>
                        <DropdownMenu.Item >Leader</DropdownMenu.Item>
                        <DropdownMenu.Item >Support</DropdownMenu.Item>
                        <DropdownMenu.Item>Api Documentation</DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Root>

                <div>
                    <SearchBar/>
                </div>
            </div>
                <div className='flex'>
                    <Switch1 />
                </div>


        </div>
    )
}
