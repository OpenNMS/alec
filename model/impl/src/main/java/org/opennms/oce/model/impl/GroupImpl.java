package org.opennms.oce.model.impl;

import java.util.HashSet;
import java.util.Set;

import org.opennms.oce.model.api.Group;
import org.opennms.oce.model.api.ModelObject;

public class GroupImpl implements Group {

    private ModelObject owner;
	private Set<ModelObject> members = new HashSet<>();

	public GroupImpl(ModelObject owner) {
		this.owner = owner;
	}
	
	@Override
    public ModelObject getOwner() {
        return owner;
    }

    @Override
    public int getNumberMembers() {
        // TODO Auto-generated method stub
        return 0;
    }

    @Override
    public int getNumberNormalState() {
        // TODO Auto-generated method stub
        return 0;
    }

    @Override
    public int getNumberNonServiceAffecting() {
        // TODO Auto-generated method stub
        return 0;
    }

    @Override
    public int getNumberServiceAffecting() {
        // TODO Auto-generated method stub
        return 0;
    }

	@Override
	public Set<ModelObject> getMembers() {
		return members;
	}

	public void addMember(ModelObject member) {
		// TODO validate member type?
		members.add(member);
	}

}
