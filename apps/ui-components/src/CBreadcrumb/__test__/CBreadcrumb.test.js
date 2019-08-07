import React from "react";
import CBreadcrumb from '../CBreadcrumb';

expect.addSnapshotSerializer(enzymeSerializer);

describe('CBreadcrumb component tests', () => {
    let wrapper, instance;

    const dataForBreadCrumb = [
        {
            id: '1',
            name: 'Home',
            path: '/home'
        },
        {
            id: '2',
            name: 'General Setup',
            path: '/generalSetup'
        }];

    let setWrapperProps = (cWrapper, propsObject) => {
        cWrapper.setProps(propsObject);
    };

    describe('Breadcrumb Component Tests', () => {

        beforeEach(() => {
            wrapper = shallow(<CBreadcrumb.WrappedComponent/>);
            setWrapperProps(wrapper, {breadcrumbData: []});
        });

        test('if CBreadcrumb component is defined', () => {
            expect(wrapper).toBeDefined();
        });

        test('if renders Breadcrumb component', () => {
            expect(wrapper.find('Breadcrumb').length).toEqual(1);
        });

        test('if Breadcrumb component contains all required props', () => {
            let propRequired = [
                'as',
                'label',
                'listProps',
                'bsPrefix',
                'children'
            ];
            let propsAvailableForBreadcrumb = Object.keys(wrapper.find('Breadcrumb').props());
            propRequired.forEach((propAvail, i) => (
                expect(propAvail).toContain(propsAvailableForBreadcrumb[i])
            ));
        });
    });

    describe('CBreadcrumb state tests', () => {

        beforeEach(() => {
            wrapper = mount(<CBreadcrumb.WrappedComponent/>);
            instance = wrapper.instance();
            setWrapperProps(wrapper, {breadcrumbData: dataForBreadCrumb});
        });

        afterEach(() => {
            wrapper.unmount();
        });

        test('if routes state is defined', () => {
            expect(wrapper.state('routes')).toBeDefined();
        });

        test('if currentLocation state is defined', () => {
            expect(wrapper.state('currentLocation')).toBeDefined();
        });

        test('if state`s property currentLocation is set after componentDidMount', () => {
            setWrapperProps(wrapper, {
                location: {
                    pathname: '/generalSetup'
                },
                history: {
                    location: {
                        pathname: ''
                    }
                }
            });
            jest.spyOn(instance, 'setCurrentLocation');
            instance.componentDidMount();
            expect(instance.setCurrentLocation).toHaveBeenCalled();
        });

        test('if routes are filtered upto current location and ' +
            'state`s property routes is set after componentDidMount ', async () => {
            // jest.spyOn(instance, 'setRoutes');
            setWrapperProps(wrapper, {location: {pathname: '/generalSetup'}});
            await instance.componentDidMount();
            // wrapper.update();
            expect(wrapper.state('routes').length).not.toBe(0);
        });

        test('if componentDidUpdate lifecycle will be called and ' +
            'routes will be filtered when url changes', async () => {
            await instance.componentDidUpdate({
                location: {
                    pathname: '/generalSetup'
                },
                history: {
                    location: {
                        pathname: '/home'
                    }
                }
            });
            expect(wrapper.state('routes').length).toBe(1);
        });

    });

    describe('BreadcrumbItem Component Tests', () => {

        beforeEach(async () => {
            wrapper = shallow(<CBreadcrumb.WrappedComponent/>);
            instance = wrapper.instance();
            setWrapperProps(wrapper, {
                breadcrumbData: dataForBreadCrumb,
                location: {
                    pathname: '/generalSetup'
                },
            });
            await instance.componentDidMount();
            wrapper.update();
        });

        test('if renders BreadcrumbItem component', () => {
            expect(wrapper.find('#breadcrumbItem1').length).toBe(1);
        });

        test('if BreadcrumbItem component shows name', () => {
            expect(wrapper.find('#breadcrumbItem1').text()).not.toBe('');
        });

        test('if  BreadcrumbItem components except last has href with value', () => {
            expect(wrapper.find('#breadcrumbItem1').prop('href')).not.toBe('');
        });

        test('if last  BreadcrumbItem component  defined', () => {
            expect(wrapper.find('#breadcrumbItem2').length).toBe(1);
        });

        test('if last BreadcrumbItem component has no href', () => {
            expect(wrapper.find('#breadcrumbItem2').prop('href')).not.toBeDefined();
        });

        test('if last BreadcrumbItem component has prop active', () => {
            expect(wrapper.find('#breadcrumbItem2').prop('active')).toBeTruthy();
        });

        test('if BreadcrumbItem  component excluding last contains all required props', () => {
            let propRequired = [
                'test-id',
                'as',
                'title',
                'target',
                'bsPrefix',
                'children',
                'href'
            ];

            let propsAvailableForBreadcrumbItem = Object.keys(wrapper.find('#breadcrumbItem1').props());
            propRequired.forEach((propAvail, i) => (
                expect(propAvail).toContain(propsAvailableForBreadcrumbItem[i])
            ));

        });

        test('if BreadcrumbItem  component including last contains all required props', () => {
            let propRequired = [
                'test-id',
                'as',
                'title',
                'target',
                'bsPrefix',
                'children',
                'active'
            ];

            let propsAvailableForBreadcrumbItem = Object.keys(wrapper.find('#breadcrumbItem2').props());
            propRequired.forEach((propAvail, i) => (
                expect(propAvail).toContain(propsAvailableForBreadcrumbItem[i])
            ));
        });
    });

    describe('Snapshot Testing', () => {
        wrapper = shallow(<CBreadcrumb.WrappedComponent breadcrumbData={dataForBreadCrumb}/>);

        test('if renders CBreadcrumb component correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });

});

