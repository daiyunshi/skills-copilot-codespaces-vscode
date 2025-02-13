function skillsMember() {
    var member = this;
    member.skills = [];
    member.addSkill = addSkill;
    member.removeSkill = removeSkill;
    member.getSkills = getSkills;

    function addSkill(skill) {
        member.skills.push(skill);
    }

    function removeSkill(skill) {
        var index = member.skills.indexOf(skill);
        member.skills.splice(index, 1);
    }

    function getSkills() {
        return member.skills;
    }
}