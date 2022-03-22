//import css file
import './App.css';


export default function App() {
  //data informations
  const data=[{
    access:"FREE",price:"$0",sub:"/month",user:"✔ Single User",
    storage:"✔ 5GB Storage",projects:"✔ Unlimited Public Projects",group:"✔ Community Access",project:"❌ Unlimited Private Projects",support:"❌ Dedicated Phone Support",domain:"❌ Free Subdomain",report:"❌ Monthly Status Reports",
  },{
    access:"PLUS",price:"$9",sub:"/month",user:"✔ 5 Users",
    storage:"✔ 50GB Storage",projects:"✔ Unlimited Public Projects",group:"✔ Community Access",project:"✔ Unlimited Private Projects",support:"✔ Dedicated Phone Support",domain:"✔ Free Subdomain",report:"❌ Monthly Status Reports",
  },{
    access:"PRO",price:"$49",sub:"/month",user:"✔ Unlimited Users",
    storage:"✔ 150GB Storage",projects:"✔ Unlimited Public Projects",group:"✔ Community Access",project:"✔ Unlimited Private Projects",support:"✔ Dedicated Phone Support",domain:"✔ Unlimited Free Subdomain",report:"✔ Monthly Status Reports",
  },
]
  return (
    <div>
      
      <h1 className='text-center title-name'>Pricing Table</h1>
      <div className="App">
      
        <div className="row">
        {data.map((ur,index)=>(
          // passing props
      <Msg  key={index} access={ur.access}
        price={ur.price}
        sub={ur.sub}
        user={ur.user}
        group={ur.group}
        storage={ur.storage}
        projects={ur.projects}
        project={ur.project}
        support={ur.support}
        domain={ur.domain}
        report={ur.report}/>
        ))}
        </div>
        
        </div>
    </div>
  );}

function Msg({access,price,sub,user,projects,group,project,storage,support,domain,report}){
  
  return(

    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-center title ">{access}</h5>
        <h3 className="card-title head text-center">{price}<sub className='sub'>{sub}</sub></h3>
      <hr></hr>
     
         <p className="card-text">{user}</p>
        <p className="card-text">{storage}</p>
        <p className="card-text">{projects}</p>
        <p className="card-text">{group}</p>
        <p className="card-text">{project}</p>
        <p className="card-text">{support}</p>
        <p className="card-text">{domain}</p>
        <p className="card-text">{report}</p>
      <button className="btn btn-outline-primary w-100">BUTTON</button>
     </div>
    </div>
  </div>
  )
}
