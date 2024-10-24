import './App.css'
import Header from './components/Header'

const Art ="                                           #\n                                      ###\n                            #############                                     ###\n                  #######################              #####\n        #### . ###############################\n#######   ##############################                                         Yes - it's literally me\n#######################################\n      #(     )########################              ####\n          #########################\n               ###################\n                           ###            ###\n                                #                 #"

function TextArt (props: {label: string, text: string}) {
  return (
    <pre
      aria-label={props.label}
      className="text-art"
    >{props.text}</pre>
  );
}


const App = () => {

  return (
   <>
   <Header />
   <TextArt label="literly me" text={Art}/>
   <span></span>
   </>
  )
}

export default App
