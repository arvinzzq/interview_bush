const cityData = [{
  id: 'axzx',
  name: '广东省',
  children: [
    {
      id: 'sdsd',
      name: '深圳市',
      children: [
        {
          id: '45dss',
          name: '南山区'
        },
        {
          id: 'sdsd11',
          name: '福田区',
          children: [{
            id: 'ddrr2',
            name: 'A街道'
          }]
        }
      ]
    },
    {
      id: '2323d',
      name: '东莞市',
      children: [
        {
          id: 'xxs2',
          name: 'A区'
        },
        {
          id: 'kklio2',
          name: 'B区',
        }
      ]
    }
  ]
}];

function findCityPath(nodeList, id, resList = []) {
	for (let i = 0; i < (nodeList || []).length; i++) {
		resList.push(nodeList[i]);
		if (nodeList[i].id === id) {
			return resList;
		} else {
			const res = findCityPath(nodeList[i].children, id, resList);
			if (res[res.length - 1].id !== id) {
				resList.pop();
			}
		}
	}
	return resList;
}
const res = findCityPath(cityData, 'kklio2');
console.log('res: ', res.map(item => item.name));