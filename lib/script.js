/**
 * Track the verify of a record from one student to another
 * @param {org.acme.model.Student} student - the student to be processed
 * @transaction
 */
function verifyStatus(student) {
    student.record.status = student.newStatus;
    return getAssetRegistry('org.acme.model.Record')
        .then(function (assetRegistry) {
            return assetRegistry.update(student.record);
        });
}
