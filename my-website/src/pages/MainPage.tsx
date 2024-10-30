

const Art ="                                           #\n                                      ###\n                            #############                                     ###\n                  #######################              #####\n        #### . ###############################\n#######   ##############################                                         Yes - it's literally me\n#######################################\n      #(     )########################              ####\n          #########################\n               ###################\n                           ###            ###\n                                #                 #"
function TextArt (props: {label: string, text: string}) {
  return (
    <pre
    
      aria-label={props.label}
      className="text-art"
    >{props.text}
    </pre>
  );
}

const MainPage = () => {
    return (
      <div>
        <TextArt label="literly me" text={Art}/>
      </div>
    );
  }
  
  export default MainPage;
  