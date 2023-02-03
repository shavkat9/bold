

function BoldText({children}) {
  return ( <span style={{fontWeight: 'bold'}}>
    {children}</span>;
  )
}

export default BoldText;

export const App = () => {
    return(
        <div>
            <p style={{fontSize: '2rem'}}>
                Hello <BoldText>world</BoldText>
                !!!!!!
            </p>
        </div>
    )
}