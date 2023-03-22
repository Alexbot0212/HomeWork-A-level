// Рекурсия: HTML tree

// {
//     const table = {
//     tagName: 'table',
//     attrs: {
//         border: "1",
//     },
//     children: [
//         {
//             tagName: 'tr',
//             children: [
//                 {
//                     tagName: "td",
//                     children: ["1x1"],
//                 },
//                 {
//                     tagName: "td",
//                     children: ["1x2"],
//                 },
//             ]
//         },
//         {
//             tagName: 'tr',
//             children: [
//                 {
//                     tagName: "td",
//                     children: ["2x1"],
//                 },
//                 {
//                     tagName: "td",
//                     children: ["2x2"],
//                 },
//             ]
//         }
//     ]
// }

// function htmlTree(obj) {
//     let string = ''
//     let tagName = obj.tagName;
//     if (tagName) {
//         string = `<${tagName}`
//         let attrs = obj.attrs;
//         if (attrs) {
//             for (const attrName in attrs) {
//                 string += ` ${attrName} = ${obj.attrs[attrName]}`
//             }
//         }
//         string += `>`
//         for (const child of obj.children) {
//             string += htmlTree(child)
//         }
//         string += `</${tagName}>`
//     }
//     else {
//         string = obj
//     }
//     return string
// }
// document.write(htmlTree(table))
// console.log(htmlTree(table))
// }

// Рекурсия: DOM tree

// {
// function domTree(parent, obj) {
//     if (obj.tagName) {
//         let tagN = document.createElement(obj.tagName)
//         if (obj.attrs) {
//             for (const attrName in obj.attrs) {
//                 tagN[attrName] = obj.attrs[attrName]
//             }
//         }
//         parent.append(tagN)
//         for (const child of obj.children) {
//             domTree(tagN, child)
//         }
//     }
//     else {
//         parent.append(obj)
//     }
// }
// const table = {
//     tagName: 'table',
//     attrs: {
//       border: "1",
//     },
//     children: [
//       {
//         tagName: 'tr',
//         children: [
//           {
//             tagName: "td",
//             children: ["1x1"],
//           },
//           {
//             tagName: "td",
//             children: ["1x2"],
//           },
//         ]
//       },
//       {
//         tagName: 'tr',
//         children: [
//           {
//             tagName: "td",
//             children: ["2x1"],
//           },
//           {
//             tagName: "td",
//             children: ["2x2"],
//           }
//         ]
//       }
//     ]
//   }

// domTree(document.body, table)
// }

// Рекурсия: Deep Copy
// {
//     const table = {
//         tagName: 'table',
//         attrs: {
//             border: "1",
//         },
//         children: [
//             {
//                 tagName: 'tr',
//                 children: [
//                     {
//                         tagName: "td",
//                         children: ["1x1"],
//                     },
//                     {
//                         tagName: "td",
//                         children: ["1x2"],
//                     },
//                 ]
//             },
//             {
//                 tagName: 'tr',
//                 children: [
//                     {
//                         tagName: "td",
//                         children: ["2x1"],
//                     },
//                     {
//                         tagName: "td",
//                         children: ["2x2"],
//                     }
//                 ]
//             }
//         ]
//     }

//     function deepCopy(arr) {
//         if (Array.isArray(arr)) {
//             var arr1 = [];
//         } else if (typeof arr == "object") {
//             var arr1 = {};
//         } else {
//             return arr;
//         }
//         for (let key in arr) {
//             if (typeof arr[key] === "object" || !Array.isArray(arr) || typeof arr[key] != null)
//                 arr1[key] = arr[key];
//             else
//                 arr1[key] = deepCopy(arr[key]);
//         }
//         return arr1;
//     }

//     const arr = [1, "string", null, undefined, { a: 15, b: 10, c: [1, 2, 3, 4], d: undefined, e: true }, true, false]
//     const arr1 = deepCopy(arr) //arr2 и все его вложенные массивы и объекты - другие объекты, которые можно менять без риска поменять что-то в arr
//     const table2 = deepCopy(table)
//     console.log(arr1, table2)
// }

//Рекурсия: My Stringify
{
    const table = {
        tagName: 'table',
        attrs: {
        border: "1",
        },
        children: [
        {
            tagName: 'tr',
            children: [
            {
                tagName: "td",
                children: ["1x1"],
            },
            {
                tagName: "td",
                children: ["1x2"],
            },
            ]
        },
        {
            tagName: 'tr',
            children: [
            {
                tagName: "td",
                children: ["2x1"],
            },
            {
                tagName: "td",
                children: ["2x2"],
            }
            ]
        }
        ]
    }

    const myStringify = function(obj) {
        if(typeof obj === 'undefined' || typeof obj === 'function') {
        return undefined
        }

        if(typeof obj === 'string') {
        return '"' + obj + '"'
        }
    
        if(Array.isArray(obj)) {
        let newArray = []
        for(let i = 0; i < obj.length; i++) {
            if(obj[i] === undefined || typeof obj[i] === 'function') {
            newArray.push(myStringify(null))
            } else {
            newArray.push(myStringify(obj[i]))
            }
        } 
        return '[' + newArray.join(',') + ']'
        }
    
        if(obj && typeof obj === 'object') {
        let newObjArray = []
        for(const key in obj) {
            if(obj[key] !== undefined || typeof obj[key] !== 'function') {
            newObjArray.push(myStringify(key) + ':' + myStringify(obj[key]))
            }
        }
        return '{' + newObjArray.join(',') + '}'
        }
        return obj + ''
    }

    const jsonString = myStringify(table)
    console.log(jsonString) 
    console.log(JSON.parse(jsonString)) 
}