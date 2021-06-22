import { v4 as uuidv4 } from 'uuid';


export const ITCities = ['Chorzów/Katowice', 'Gdańsk', 'Gdynia', 'Poznań', 'Szczecin', 'Warszawa', 'Wrocław', 'Toruń'];
export const managementEngineeringCities = ['Bydgoszcz', 'Chorzów/Katowice', 'Gdańsk', 'Opole', 'Poznań', 'Szczecin', 'Toruń', 'Wrocław'];
export const logisticsCities = ['Bydgoszcz', 'Chorzów/Katowice', 'Gdańsk', 'Gdynia', 'Opole', 'Poznań', 'Szczecin', 'Warszawa', 'Wrocław', 'Toruń'];

export const payment = () => {
    const userdID = uuidv4();
    const typeID = uuidv4();
    const distributionModelID = uuidv4();

    return {
        userId: userdID,
        typeId: typeID,
        distributionModelId: distributionModelID,
        title: 'Rata za studia',
        amount: '485.00',
        deadline: '2020-06-01',
        academicYear: '2019/2020',
        semester: 3
    };
};
