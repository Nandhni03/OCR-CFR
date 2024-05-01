import { NavLink, Outlet } from 'react-router-dom'

export default function ProfilesPage() {
    const profiles = [1, 2, 3, 4, 5]

    return (
        <div style={{ display: 'flex', gap: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'left' }}>
                <h1>Profiles Page</h1>
                {profiles.map((profile) =>
                    <NavLink 
                        key={profile} 
                        to={`/profiles/${profile}`}
                        style={({ isActive }) => ({
                            color: isActive ? '#007bff' : 'inherit',   
                        })}>
                        Profile {profile}
                    </NavLink>
                )}
            </div>
            <Outlet />
        </div>
    )
}