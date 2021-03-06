import { useContext, useEffect, useState } from 'react';
import { SelectProfileContainer } from '~/containers';
import { FirebaseContext } from '~/context/firebase';

export default function BrowseContainer({ slides }) {
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    useEffect(() => {
        console.log(profile);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [profile.displayName]);

    return <SelectProfileContainer user={user} setProfile={setProfile} />;
}
