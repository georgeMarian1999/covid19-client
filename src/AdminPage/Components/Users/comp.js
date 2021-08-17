// <div>
//     <table>
//         <thead>
//         <tr>
//             <th>Username</th>
//             <th>Type</th>
//         </tr>
//         </thead>
//         <tbody>
//         {users.map((user, index) => (
//             <tr key={index}>
//                 <td>{user.username}</td>
//                 <td>{user.type}</td>
//                 <td>
//                     <EditUsers user={user}/>
//                 </td>
//                 <td>
//                     <DeleteUsers user={user}/>
//                 </td>
//             </tr>
//         ))}
//         </tbody>
//     </table>
// </div>