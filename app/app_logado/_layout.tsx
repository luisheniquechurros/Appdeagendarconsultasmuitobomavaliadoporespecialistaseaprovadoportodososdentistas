import { Tabs } from "expo-router";
import { FontAwesome } from '@expo/vector-icons';

export default function Layout(){
    return(      

    <Tabs screenOptions={{tabBarStyle: {backgroundColor:'#0B3B60', height:60}}}>
        <Tabs.Screen
            name='index' options={{title: 'index' , headerShown:false,
        
            tabBarIcon: ({focused, size, color, }) => {
                if (focused)
                    return <FontAwesome name='home' size={32} color={color} />
                else
                return <FontAwesome name='home' size={32} color={"#FFF"} />
                }
        }}/>

        <Tabs.Screen
                name='consultas' options={{title: 'consultas' , headerShown:false,
                
                tabBarIcon: ({focused, size, color, }) => {
                    if (focused)
                        return <FontAwesome name='calendar' size={32} color={color} />
                     else
                    return <FontAwesome name='calendar' size={32} color={"#FFF"} />      
                }
        }}/>

        <Tabs.Screen 
            name="explorar" options={{title: 'explorar' , headerShown:false,

            tabBarIcon: ({focused, size, color, }) => {
                if (focused)
                    return <FontAwesome name='search' size={32} color={color} />
                else
                return <FontAwesome name='search' size={32} color={"#FFF"} />
            }
        }}/>

    <Tabs.Screen 
        name="perfil" options={{title: 'perfil' , headerShown:false,

        tabBarIcon: ({focused, size, color, }) => {
            if (focused)
                return <FontAwesome name='user' size={32} color={color} />
            else
            return <FontAwesome name='user' size={32} color={"#FFF"} />
            }
        }}/>

    </Tabs>

    );
}