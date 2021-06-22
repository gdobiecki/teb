import { createNewPayment, getPayment } from '../utils/api';
import { payment } from '../testData/testData';

describe('Task #3', () => {
    const paymentBody = payment();
    it('create a new payment and verify it', () => {
        createNewPayment(paymentBody).then(response => {
            const id = response.data.id;
            const userId = response.data.userId;
            const typeId = response.data.typeId;
            const distributionModelId = response.data.distributionModelId;
            const title = response.data.title;
            const amount = response.data.amount;
            const deadline = response.data.deadline;
            const academicYear = response.data.academicYear;
            const semester = response.data.semester;
            const createdAt = response.data.createdAt;
            const updatedAt = response.data.updatedAt;
            getPayment(id).then(res => {
                expect(res.data.id).to.equal(id);
                expect(res.data.userId).to.equal(userId);
                expect(res.data.typeId).to.equal(typeId);
                expect(res.data.distributionModelId).to.equal(distributionModelId);
                expect(res.data.title).to.equal(title);
                expect(res.data.amount).to.equal(amount);
                expect(res.data.deadline).to.equal(deadline);
                expect(res.data.academicYear).to.equal(academicYear);
                expect(res.data.semester).to.equal(semester);
                expect(res.data.createdAt).to.equal(createdAt);
                expect(res.data.updatedAt).to.equal(updatedAt);
            });
        });
    });
});
