export const canAssignImagesToMenuItems = "canAssignImagesToMenuItems"
export const canConfigModifiers = "canConfigModifiers"
export const canConfigureItemRouting = "canConfigureItemRouting"
export const canCreateAndModifyExistingMenuItems = "canCreateAndModifyExistingMenuItems"
export const canCreateMulitipleSubMenus = "canCreateMulitipleSubMenus"
export const canCreateMultipleMenus = "canCreateMultipleMenus"
export const canCreateOrderModes = "canCreateOrderModes"
export const canCreateStores = "canCreateStores"
export const canCreateTenders = "canCreateTenders"
export const canMakeMenusCFC = "canMakeMenusCFC"
export const companyName = "companyName"
export const emailAddressOfPerson = "emailAddressOfPerson"
export const everConfiguredOrderModeInATO = "everConfiguredOrderModeInATO"
export const everConfiguredTendersInATO = "everConfiguredTendersInATO"
export const everSetupATOParameters = "everSetupATOParameters"
export const everUpgradedATO = "everUpgradedATO"
export const isPSNeeded = "isPSNeeded"
export const isTechLead = "isTechLead"
export const nameOfPerson = "nameOfPerson"
export const numberOfLocationsRequiredAssistance = "numberOfLocationsRequiredAssistance"
export const question1 = "question1"
export const rankConfigurationCenter = "rankConfigurationCenter"
export const rankMenuOnline = "rankMenuOnline"
export const rankOfATOSkills = "rankOfATOSkills"
export const roleOfPerson = "roleOfPerson"
export const timelineOfPartner = "timelineOfPartner"
export const totalNumberOfLocations = "totalNumberOfLocations"
export const yourGotoLiveExpectation = "yourGotoLiveExpectation"

export let questions = new Map();
questions.set(nameOfPerson, 'What is your name?');
questions.set(emailAddressOfPerson, 'What is your email address?')
questions.set(companyName, 'What company do you work for?');
questions.set(roleOfPerson, 'What is your role on this project?');
questions.set(isTechLead, 'Will you be the technical lead assigned to this project?');
questions.set(totalNumberOfLocations, 'How many locations do you have?');
questions.set(numberOfLocationsRequiredAssistance, 'How many locations will you need assistance?');
questions.set(timelineOfPartner, 'What is the timeline you partner has provided you?');
questions.set(yourGotoLiveExpectation, 'When is your expected go live date for pilot?');
questions.set(isPSNeeded, 'Will you be needing PS consulting?');
questions.set(rankOfATOSkills, 'What is your teams technical ranking for installing, upgrading, and supporting ATO?');
questions.set(everUpgradedATO, 'Have your team ever upgraded ATO to a newer version?');
questions.set(everConfiguredOrderModeInATO, 'Have you configured order mode in ATO?');
questions.set(everConfiguredTendersInATO, 'Have you configured tenders in ATO?');
questions.set(everSetupATOParameters, 'Are you able to set up the ATO system parameters for a store?');
questions.set(rankMenuOnline, 'What is your teams technical ranking forming and maintaining a menu online?');
questions.set(canCreateMultipleMenus, 'Can you create multiple menus?');
questions.set(canCreateMulitipleSubMenus, 'Can you create multiple sub menus?');
questions.set(canCreateAndModifyExistingMenuItems, 'Can you create and modify existing menu items and modifier groups?');
questions.set(canConfigModifiers, 'Are you able to config. modifiers as default vs. recipe?');
questions.set(canAssignImagesToMenuItems, 'Can you assign images to menu items?');
questions.set(rankConfigurationCenter, 'What is your teams technical ranking of Configuration center?');
questions.set(canCreateStores, 'Are you able to create stores?');
questions.set(canMakeMenusCFC, 'Are you able to make sub menus, menu items, modifier groups?');
questions.set(canCreateOrderModes, 'Are you able to create order modes?');
questions.set(canCreateTenders, 'Are you able to create tenders?');
questions.set(canConfigureItemRouting, 'Are you able to configure item routing?');
questions.set(question1, 'Who handles technical support on your Aloha POS system?');

export let atoAssessmentScores = new Map();

atoAssessmentScores.set(everUpgradedATO, 5);
atoAssessmentScores.set(everConfiguredOrderModeInATO, 5);
atoAssessmentScores.set(everConfiguredTendersInATO, 5);
atoAssessmentScores.set(everSetupATOParameters, 5);

export let menuAsssessmentScores = new Map();

menuAsssessmentScores.set(canCreateMultipleMenus, 5);
menuAsssessmentScores.set(canCreateMulitipleSubMenus, 5);
menuAsssessmentScores.set(canCreateAndModifyExistingMenuItems, 5);
menuAsssessmentScores.set(canConfigModifiers, 5);
menuAsssessmentScores.set(canAssignImagesToMenuItems, 5);


export let configurationCenterAssessmentScores = new Map();
configurationCenterAssessmentScores.set(canCreateStores, 5);
configurationCenterAssessmentScores.set(canMakeMenusCFC, 5);
configurationCenterAssessmentScores.set(canCreateOrderModes, 5);
configurationCenterAssessmentScores.set(canCreateTenders, 5);
configurationCenterAssessmentScores.set(canConfigureItemRouting, 5);


export const questionsInOrder = [
    nameOfPerson,
    emailAddressOfPerson,
    companyName,
    roleOfPerson,
    isTechLead,
    totalNumberOfLocations,
    numberOfLocationsRequiredAssistance,
    timelineOfPartner,
    yourGotoLiveExpectation,
    isPSNeeded,
    rankOfATOSkills,
    everUpgradedATO,
    everConfiguredOrderModeInATO,
    everConfiguredTendersInATO,
    everSetupATOParameters,
    rankMenuOnline,
    canCreateMultipleMenus,
    canCreateAndModifyExistingMenuItems,
    canCreateMulitipleSubMenus,
    canConfigModifiers, 
    canAssignImagesToMenuItems,
    rankConfigurationCenter,
    canCreateStores, 
    canMakeMenusCFC,
    canCreateOrderModes,
    canCreateTenders,
    canConfigureItemRouting,
    question1
];
